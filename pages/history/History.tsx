import { ListHistory } from "@/components/list-history/ListHistory";
import { HistoryData } from "@/data/HistoryData";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import * as S from "./styles";

export const History = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    if (visibleCount < HistoryData.length) {
      setVisibleCount((prev) => prev + 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <S.ContainerHistory>
        <S.HistoryTitle>Histórico de Funcionamento</S.HistoryTitle>

        <ListHistory visibleCount={visibleCount} />

        <S.ContButton>
          <S.ButtonHistory onPress={handleLoadMore}>Atualizar</S.ButtonHistory>
        </S.ContButton>
      </S.ContainerHistory>
    </ScrollView>
  );
};
