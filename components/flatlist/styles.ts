import styled from "styled-components/native";
import { Fonts } from "@/styles/Fonts";

export const FlatlistContainer = styled.View`
  height: 10vh;
  max-width: 30%;
  width: 100%;
  background-color: #c0dfe2;
  border-radius: 15px;
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