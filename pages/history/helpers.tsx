import { fetchSensors, fetchSensorWithHistory } from "@/services/api";
import { SensorWithHistory } from "@/types/sensorWithHistory";
import { useEffect, useState } from "react";

export function useSensorsWithHistory() {
  const [sensorsWithHistory, setSensorsWithHistory] = useState<SensorWithHistory[]>([]);
  const [loading, setLoading] = useState(false);

  const loadInitialHistory = async () => {
    setLoading(true);
    try {
      const sensors = await fetchSensors();
      const results: SensorWithHistory[] = [];

      for (const sensor of sensors) {
        const sensorWithHistory = await fetchSensorWithHistory(sensor.id);
        if (sensorWithHistory.historic?.length > 0) {
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
      setSensorsWithHistory(updatedSensors);
    } catch (error) {
      console.error("Erro ao atualizar histórico:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitialHistory();
  }, []);

  return { sensorsWithHistory, loading, handleUpdate };
}

// Função auxiliar para validar timestamp
const isValidTimestamp = (timestamp: string | number | Date): boolean => {
  if (!timestamp) return false;
  
  const date = new Date(timestamp);
  return !isNaN(date.getTime());
};

// Função auxiliar para formatar timestamp de forma segura
const safeFormatTime = (timestamp: string | number | Date): string => {
  if (!isValidTimestamp(timestamp)) {
    return "00:00";
  }
  
  return new Date(timestamp).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
