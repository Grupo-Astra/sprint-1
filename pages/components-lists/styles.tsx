import { Fonts } from "@/styles/Fonts";
import styled from "styled-components/native";

export const ComponentsContainer = styled.View`
  flex: 1;
  background-color: #f0f0f0;
  width: 100%;
  justify-content: space-between;
`;

export const ComponentsTitle = styled.Text`
  font-size: 30px;
  font-family: ${Fonts.Cinzel};
  text-align: center;
  margin-top: 50px;
`;
export const FlatCont = styled.View`
  width: 100%;
  padding: 15px;
`;
export const Nav = styled.View`
  margin-bottom: 0;
`;
