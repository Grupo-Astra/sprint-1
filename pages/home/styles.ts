import { Fonts } from "@/styles/Fonts";
import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: #f0f0f0;
  width: 100%;
  justify-content: space-between;
`;

export const HomeTitle = styled.Text`
  font-size: 4rem;
  font-family: ${Fonts.Cinzel};
  text-align: center;
  margin-top: 5rem;
`;
export const FlatCont = styled.View`
  width: 100%;
  padding: 1.5rem;
`;
export const SensorCard = styled.View`
  width: 600px;
  height: 250px;
  background-color: #c6e8eb;
  border-radius: 16px;
  margin-right: 16px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const SensorTitle = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
  font-family: ${Fonts.Jaldi};
`;

export const SensorInfoBox = styled.View`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  height: 150px;
  width: 500px;
`;

export const SensorText = styled.Text`
  font-size: 1.2rem;
  line-height: 2rem;
  font-family: ${Fonts.Jaldi};
`;

export const SaibaMais = styled.Text`
  color: #009dff;
  font-size: 1.2rem;
  margin-top: 8px;
  align-self: flex-end;
  font-family: ${Fonts.Jaldi};
`;
export const Nav = styled.View`
  margin-bottom: 0;
`;
