import { Fonts } from "@/styles/Fonts";
import styled from "styled-components/native";

export const SplashContainer = styled.View`
  background-color: #0294a6;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SplashTitle = styled.Text`
  color: #fff;
  font-size: 7rem;
  font-family: ${Fonts.Cinzel};
  line-height: 10rem;
`;
export const SplashSubTitle = styled.Text`
  color: #fff;
  font-size: 2.5rem;
  font-family: ${Fonts.Jaldi};
  line-height: 10rem;
`;
export const Image = styled.View``;
