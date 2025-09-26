import { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useGraphsSensors } from "./helpers";
import { GraphProps } from "./props";

export const Graphs = ({ sensors }: GraphProps) => {
  if (!sensors) {
    return (
      <View>
        <Text>Nenhum dado de sensor disponível</Text>
      </View>
    );
  }

  const [page, setPage] = useState(0);
  const [tooltipData, setTooltipData] = useState<{x: number; y: number; value: string; sensorName: string} | null>(null);
  
  const sensorsPerPage = 10;

  const startIndex = page * sensorsPerPage;
  const currentSensors = sensors.slice(startIndex, startIndex + sensorsPerPage);

  const { chartLabels, datasets, sensorNames } = useGraphsSensors({ sensors: currentSensors });

  const handleTooltip = (data: any) => {
    if (data && data.x !== undefined && data.y !== undefined && data.index !== undefined && data.datasetIndex !== undefined) {
      const sensorIndex = data.datasetIndex;
      const pointIndex = data.index;
      const value = datasets[sensorIndex]?.data[pointIndex];
      
      setTooltipData({
        x: data.x,
        y: data.y,
        value: value?.toString() || '0',
        sensorName: sensorNames[sensorIndex] || `Sensor ${sensorIndex + 1}`
      });
    } else {
      setTooltipData(null);
    }
  };

  return (
    <View>
      <Text>10 últimos sensores:</Text>
      
      {datasets.length > 0 ? (
        <View>
          <LineChart
            data={{
              labels: chartLabels,
              datasets,
            }}
            width={Dimensions.get("window").width - 100}
            height={220}
            yAxisInterval={1}
            chartConfig={{
                backgroundGradientFrom: "#0294a6",  // cor de fundo inicial do gradiente
                backgroundGradientTo: "#0294a6",    // cor de fundo final do gradiente
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,       // cor das linhas
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // cor dos textos
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#000",
                },
              }}
              style={{
                borderRadius: 16,
                backgroundColor: "#0294a6", // cor real do fundo do container
              }}
            decorator={() => {
              return tooltipData ? (
                <View
                  style={{
                    position: 'absolute',
                    left: tooltipData.x - 60,
                    top: tooltipData.y - 40,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 8,
                    borderRadius: 8,
                    minWidth: 120,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
                    {tooltipData.sensorName}
                  </Text>
                  <Text style={{ color: 'white', fontSize: 10 }}>
                    Valor: {tooltipData.value}
                  </Text>
                </View>
              ) : null;
            }}
            onDataPointClick={handleTooltip}
          />
          
          {/* Legenda dos sensores */}
          <View style={{ marginTop: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
            {sensorNames.map((name, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15, marginBottom: 5 }}>
                <View 
                  style={{ 
                    width: 12, 
                    height: 12, 
                    backgroundColor: datasets[index]?.color(), 
                    marginRight: 5,
                    borderRadius: 6 
                  }} 
                />
                <Text style={{ fontSize: 10 }}>{name}</Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <Text>Nenhum dado disponível para exibir no gráfico</Text>
      )}
    </View>
  );
};