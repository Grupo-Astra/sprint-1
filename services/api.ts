import { Sensor } from "@/types/sensor";
import { SensorWithHistory } from "@/types/sensorWithHistory";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

export const fetchSensors = async (): Promise<Sensor[]> => {
  const response = await api.get<Sensor[]>("readings");
  return response.data;
};

export const fetchSensorWithHistory = async (
  id: number,
): Promise<SensorWithHistory> => {
  const response = await api.get<SensorWithHistory>(`readings/${id}`);
  return response.data;
};
