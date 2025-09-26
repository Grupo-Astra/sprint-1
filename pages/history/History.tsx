import { Graphs } from "@/components/graphs";
import { ListHistory } from "@/components/list-history/ListHistory";
import { NavBar } from "@/components/navbar/Navbar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSensorsWithHistory } from "./helpers";
import * as S from "./styles";

export const History = () => {
  const { sensorsWithHistory, handleUpdate, loading } = useSensorsWithHistory();
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <S.ContainerHistory>

        <S.ContentRow>
          <S.ListColumn>
            <ListHistory sensors={sensorsWithHistory} />
          </S.ListColumn>
          <S.GraphColumn>
            <Graphs sensors={sensorsWithHistory} />
          </S.GraphColumn>
        </S.ContentRow>

        <S.ContButton>
          <S.ButtonHistory onPress={handleUpdate} disabled={loading}>
            <Text style={{ 
              textAlign: "center", 
              fontSize: 18, 
              fontWeight: 'bold'
            }}>
              {loading ? "Carregando..." : "Atualizar"}
            </Text>
          </S.ButtonHistory>
        </S.ContButton>
      </S.ContainerHistory>

      <S.NavBarContainer>
        <NavBar />
      </S.NavBarContainer>
    </SafeAreaView>
  );
};