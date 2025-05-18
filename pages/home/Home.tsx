import { FlatListSensor } from "@/components/flatlist/FlatList";
import { NavBar } from "@/components/navbar/Navbar";
import { SensorDataProps } from "@/data/props";
import { baseSensorData } from "@/data/SensoData";
import { useEffect, useState } from "react";
import * as S from "./styles";

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

export const Home = () => {
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
    <S.HomeContainer>
      <S.HomeTitle>COMPONENTES</S.HomeTitle>
      <S.FlatCont>
        <FlatListSensor data={sensorData} />
      </S.FlatCont>
      <S.Nav>
        <NavBar />
      </S.Nav>
    </S.HomeContainer>
  );
};
