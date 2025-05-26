import { ListHistory } from "@/components/list-history/ListHistory";
import { NavBar } from "@/components/navbar/Navbar";
import { HistoryData } from "@/data/HistoryData";
import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";

export const History = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    if (visibleCount < HistoryData.length) {
      setVisibleCount((prev) => prev + 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <S.ContainerHistory>
        <S.HistoryTitle>Histórico de Funcionamento</S.HistoryTitle>

        <ListHistory visibleCount={visibleCount} />

        <S.ContButton>
          <S.ButtonHistory onPress={handleLoadMore}>
            <Text style={{ textAlign: "center", fontSize: 25 }}>Atualizar</Text>
          </S.ButtonHistory>
        </S.ContButton>
      </S.ContainerHistory>

      <S.NavBarContainer>
        <NavBar />
      </S.NavBarContainer>
    </SafeAreaView>
  );
};
