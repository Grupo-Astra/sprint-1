import { FlatListSensor } from "@/components/flatlist/FlatList";
import { NavBar } from "@/components/navbar/Navbar";
import * as S from "./styles";

export const Home = () => {
  const sensores = Array(6)
    .fill(0)
    .map((_, i) => (
      <S.SensorCard key={i}>
        <S.SensorTitle>Sensor de Pressão</S.SensorTitle>
        <S.SensorInfoBox>
          <S.SensorText>última atualização:</S.SensorText>
          <S.SensorText>status atual:</S.SensorText>
          <S.SensorText>valor atual:</S.SensorText>
          <S.SaibaMais>saiba mais</S.SaibaMais>
        </S.SensorInfoBox>
      </S.SensorCard>
    ));

  return (
    <S.HomeContainer>
      <S.HomeTitle>COMPONENTES</S.HomeTitle>
      <S.FlatCont>
        <FlatListSensor data={sensores} />
      </S.FlatCont>
      <S.Nav>
        <NavBar />
      </S.Nav>
    </S.HomeContainer>
  );
};
