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
export const Nav = styled.View`
  margin-bottom: 0;
`;
