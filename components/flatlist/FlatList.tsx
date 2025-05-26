import { ListRenderItem, FlatList as RNFlatList } from "react-native";
import { FlatListProps } from "./props";
import * as S from "./styles";

export const FlatListSensor = ({ data }: FlatListProps) => {
  const renderItem: ListRenderItem<FlatListProps["data"][number]> = ({
    item,
  }) => (
    <S.SensorCard>
      <S.SensorTitle>{item.nome}</S.SensorTitle>
      <S.SensorInfoBox>
        <S.SensorText>
          última atualização: {item.ultimaAtualizacao}{" "}
        </S.SensorText>
        <S.SensorText>status atual: {item.status}</S.SensorText>
        <S.SensorText>valor atual: {item.valor}</S.SensorText>
      </S.SensorInfoBox>
    </S.SensorCard>
  );

  return (
    <RNFlatList
      horizontal
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  );
};
