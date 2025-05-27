import { HistoryData } from "@/data/HistoryData";
import React from "react";
import { FlatList } from "react-native";
import { ListHistoryProps } from "./props";
import * as S from "./styles";

export const ListHistory: React.FC<ListHistoryProps> = ({ visibleCount }) => {
  const slicedData = HistoryData.sort((a, b) => a.id - b.id).slice(
    0,
    visibleCount,
  );

  return (
    <S.ListContainer>
      <FlatList
        data={slicedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <S.ItemContainer>
            <S.ItemTitle>{item.dispositivo}</S.ItemTitle>
            <S.ItemDescription>{item.acao}</S.ItemDescription>
            <S.ItemTime>{item.horario}</S.ItemTime>
          </S.ItemContainer>
        )}
      />
    </S.ListContainer>
  );
};
