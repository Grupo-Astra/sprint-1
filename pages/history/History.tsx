import React, { useEffect, useState } from "react";
import { ListHistory } from "@/components/list-history/ListHistory";
import { NavBar } from "@/components/navbar/Navbar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchSensors, fetchSensorWithHistory } from "@/services/api";
import { SensorWithHistory } from "@/types/sensorWithHistory";
import * as S from "./styles";

export const History = () => {
  const [sensorsWithHistory, setSensorsWithHistory] = useState<
    SensorWithHistory[]
  >([]);
  const [loading, setLoading] = useState(false);

  const loadInitialHistory = async () => {
    setLoading(true);
    try {
      const sensors = await fetchSensors();
      const results: SensorWithHistory[] = [];

      for (const sensor of sensors) {
        const sensorWithHistory: SensorWithHistory =
          await fetchSensorWithHistory(sensor.id);

        if (sensorWithHistory.historic.length > 0) {
          results.push(sensorWithHistory);
        }
      }

      setSensorsWithHistory(results);
    } catch (error) {
      console.error("Erro ao carregar histórico inicial:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const updatedSensors: SensorWithHistory[] = [];

      for (const sensor of sensorsWithHistory) {
        const updated = await fetchSensorWithHistory(sensor.id);
        updatedSensors.push(updated);
      }

      setSensorsWithHistory((prev) => {
        const merged = updatedSensors.map((updated) => {
          const existing = prev.find((s) => s.id === updated.id);
          return existing ? { ...updated } : updated;
        });
        return merged;
      });
    } catch (error) {
      console.error("Erro ao atualizar histórico:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitialHistory();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <S.ContainerHistory>
        <S.HistoryTitle>Histórico de Funcionamento</S.HistoryTitle>

        <ListHistory sensors={sensorsWithHistory} />

        <S.ContButton>
          <S.ButtonHistory onPress={handleUpdate} disabled={loading}>
            <Text style={{ textAlign: "center", fontSize: 25 }}>
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
