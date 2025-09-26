import { Graphs } from "@/components/graphs";
import { ListHistory } from "@/components/list-history/ListHistory";
import { NavBar } from "@/components/navbar/Navbar";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSensorsWithHistory } from "./helpers";

import * as S from "./styles";

export const History = () => {
  const { sensorsWithHistory, handleUpdate, loading } = useSensorsWithHistory();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <S.ContainerHistory>
        
        <S.GraphSection>
          <Graphs sensors={sensorsWithHistory} />
        </S.GraphSection>

        <S.ListSection>
          <ListHistory sensors={sensorsWithHistory} />
        </S.ListSection>

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
          <S.ButtonHistory onPress={() => navigation.navigate("NovaLeitura")}>
            <Text style={{ 
              textAlign: "center", 
              fontSize: 18, 
              fontWeight: 'bold'
            }}>
              Registrar Leitura
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