import { Fonts } from "@/styles/Fonts";
import styled from "styled-components/native";

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f0f0;
  justify-content: space-between;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const HomeTitle = styled.Text`
  font-size: 70px;
  font-family: ${Fonts.Cinzel};
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
  font-weight: 700;
`;

export const Presentation = styled.Text`
  font-family: ${Fonts.Cinzel};
  font-size: 25px;
  text-align: justify;
  padding: 0 20px;
`;

export const ImageWrapper = styled.View`
  align-items: center;
  /* margin-bottom: 30px; */
`;

export const LogoImage = styled.Image`
  width: 150px;
  height: 150px;
  resize: contain;
`;

export const Nav = styled.View`
  margin-bottom: 0;
`;
