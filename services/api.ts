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

export const setupAuthInterceptor = (signOut: () => Promise<void>) => {
  api.interceptors.response.use(
    (response) => response,

    async (error) => {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status == 401) {
          if (error.config?.url != "/auth/login") {
            console.warn("Token expirado ou inválido. Deslogando...");
            await signOut();
          }
        }
      }
      return Promise.reject(error);
    },
  );
};

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
export const createSensorReading = async (sensorData: {
  name: string;
  currentValue: number;
  currentStatus: string;
}): Promise<any> => {
  const response = await api.post("readings", sensorData);
  return response.data;
};

