import { ListRenderItem, FlatList as RNFlatList } from "react-native";
import { FlatListProps } from "./props";
import * as S from "./styles";
import { Sensor } from "@/types/sensor";

export const FlatListSensor = ({ data }: FlatListProps) => {
  const renderItem: ListRenderItem<Sensor> = ({ item }) => (
    <S.SensorCard>
      <S.SensorTitle>{item.name}</S.SensorTitle>
      <S.SensorInfoBox>
        <S.SensorText>status atual: {item.currentStatus}</S.SensorText>
        <S.SensorText>valor atual: {item.currentValue.toFixed(4)}</S.SensorText>
      </S.SensorInfoBox>
    </S.SensorCard>
  );

  return (
    <RNFlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  );
};
