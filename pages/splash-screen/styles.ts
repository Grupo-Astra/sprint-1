import { Fonts } from "@/styles/Fonts";
import styled from "styled-components/native";

export const SplashContainer = styled.View<{ height: number }>`
  background-color: #0294a6;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const SplashTitle = styled.Text`
  color: #fff;
  font-size: 70px;
  font-family: ${Fonts.Cinzel};
  line-height: 100px;
`;
export const SplashSubTitle = styled.Text`
  color: #fff;
  font-size: 25px;
  font-family: ${Fonts.Jaldi};
  line-height: 100px;
`;
export const Image = styled.View``;
