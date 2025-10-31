import { NavBar } from "@/components/navbar/Navbar";
import * as S from "./styles";
import { FlatListSensor } from "@/components/flatlist/FlatList";
import { useEffect, useState } from "react";
import { fetchSensors } from "@/services/api";
import { Sensor } from "@/types/sensor";

export const ComponentsList = () => {
  const [sensorData, setSensorData] = useState<Sensor[]>([]);

  const updateSensorData = async () => {
    try {
      const data = await fetchSensors();
      setSensorData(data);
    } catch (error) {
      console.error("Erro ao buscar sensores:", error);
    }
  };

  useEffect(() => {
    updateSensorData();
    const interval = setInterval(updateSensorData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.ComponentsContainer>
      <S.ComponentsTitle>COMPONENTES</S.ComponentsTitle>
      <S.FlatCont>
        <FlatListSensor data={sensorData} />
      </S.FlatCont>
      <S.Nav>
        <NavBar />
      </S.Nav>
    </S.ComponentsContainer>
  );
};
