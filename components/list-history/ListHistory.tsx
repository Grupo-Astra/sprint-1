import React from "react";
import { FlatList } from "react-native";
import { ListHistoryProps } from "./props";
import * as S from "./styles";

export const ListHistory: React.FC<ListHistoryProps> = ({ sensors }) => {
  const allEntries = sensors.flatMap((sensor) =>
    sensor.historic.map((entry) => ({
      id: entry.id,
      name: sensor.name,
      value: entry.value,
      status: entry.status,
      timestamp: entry.timestamp,
    })),
  );

  const sortedEntrties = allEntries.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );

  return (
    <S.ListContainer>
      <FlatList
        data={sortedEntrties}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <S.ItemContainer>
            <S.ItemTitle>{item.name}</S.ItemTitle>
            <S.ItemDescription>
              Valor: {item.value.toFixed(4)}
            </S.ItemDescription>
            <S.ItemDescription>Status: {item.status}</S.ItemDescription>
            <S.ItemTime>{new Date(item.timestamp).toLocaleString()}</S.ItemTime>
          </S.ItemContainer>
        )}
      />
    </S.ListContainer>
  );
};
