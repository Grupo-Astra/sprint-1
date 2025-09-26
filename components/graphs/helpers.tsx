import { SensorWithHistory } from "@/types/sensorWithHistory";

export function useGraphsSensors({ sensors }: { sensors: SensorWithHistory[] }) {
  const MAX_LABELS = 5;

  // Se não há sensores, retorna valores vazios
  if (!sensors || sensors.length === 0) {
    return {
      chartLabels: [],
      datasets: [],
      sensorNames: []
    };
  }

  // Encontra o sensor com mais histórico para determinar o número de pontos
  const maxHistoryLength = Math.max(
    ...sensors.map(sensor => sensor.historic?.length || 0)
  );

  // Usa no máximo MAX_LABELS pontos
  const dataPoints = Math.min(maxHistoryLength, MAX_LABELS);

  // Pega os timestamps do primeiro sensor que tenha histórico
  const firstSensorWithHistory = sensors.find(sensor => sensor.historic?.length > 0);
  const timestamps = firstSensorWithHistory?.historic?.slice(-dataPoints).map(entry => {
    // Converte o timestamp para hora formatada
    if (entry.timestamp) {
      const date = new Date(entry.timestamp);
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
    return '';
  }) || [];

  // Cria labels baseados nos timestamps reais
  const chartLabels = timestamps.length > 0 ? timestamps : 
    Array.from({ length: dataPoints }, (_, i) => `Hora ${i + 1}`);

  // Prepara os datasets para o gráfico
  const datasets = sensors.map((sensor, index) => {
    const colors = [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
      "rgba(199, 199, 199, 1)",
      "rgba(83, 102, 255, 1)",
      "rgba(40, 159, 64, 1)",
      "rgba(210, 99, 132, 1)",
    ];

    // Pega os valores do histórico (últimos dataPoints valores)
    const historicValues = sensor.historic?.slice(-dataPoints).map(entry => entry.value) || [];
    
    // Se não tem histórico suficiente, preenche com zeros
    const data = Array.from({ length: dataPoints }, (_, i) => {
      return historicValues[i] || 0;
    });

    return {
      data,
      color: () => colors[index % colors.length],
      strokeWidth: 2,
      // Adiciona o nome do sensor para cada ponto
      withDots: true,
    };
  });

  // Array com os nomes dos sensores para exibir no tooltip
  const sensorNames = sensors.map(sensor => sensor.name || `Sensor ${sensor.id}`);

  return { chartLabels, datasets, sensorNames };
}