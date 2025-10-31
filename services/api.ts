import { ResetPasswordData } from "@/types/resetPasswordData";
import { Sensor } from "@/types/sensor";
import { SensorWithHistory } from "@/types/sensorWithHistory";
import { UserData } from "@/types/userData";
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
  const response = await api.get<Sensor[]>("v2/readings");
  return response.data;
};

export const fetchSensorWithHistory = async (
  id: number,
): Promise<SensorWithHistory> => {
  const response = await api.get<SensorWithHistory>(`v2/readings/${id}`);
  return response.data;
};
export const createSensorReading = async (sensorData: {
  name: string;
  currentValue: number;
  currentStatus: string;
}): Promise<any> => {
  const response = await api.post("v2/readings", sensorData);
  return response.data;
};

export const fetchUserData = async (): Promise<UserData> => {
  const response = await api.get<UserData>("v2/users/me");
  return response.data;
};

export const resetPassword = async (data: ResetPasswordData): Promise<any> => {
  const response = await api.post("/auth/reset-password", data);
  return response.data;
};
