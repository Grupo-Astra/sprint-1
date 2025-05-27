import { NavBar } from "@/components/navbar/Navbar";
import * as S from "./styles";
import { FlatListSensor } from "@/components/flatlist/FlatList";
import { SensorDataProps } from "@/data/props";
import { baseSensorData } from "@/data/SensoData";
import { useEffect, useState } from "react";

const getRandomStatus = () => {
  const status = ["Normal", "Alerta", "Erro", "Não funcionando"];
  return status[Math.floor(Math.random() * status.length)];
};

const getRandomValue = (baseValue: string) => {
  const glitch = ["-", "Erro", "Desconectado"];
  return Math.random() < 0.2
    ? glitch[Math.floor(Math.random() * glitch.length)]
    : baseValue;
};

export const ComponentsList = () => {
  const [sensorData, setSensorData] = useState<SensorDataProps[]>([]);

  const updateSensorData = () => {
    const newData = baseSensorData.map((item) => ({
      ...item,
      ultimaAtualizacao: "1min",
      status: getRandomStatus(),
      valor: getRandomValue(item.valor),
    }));
    setSensorData(newData);
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
