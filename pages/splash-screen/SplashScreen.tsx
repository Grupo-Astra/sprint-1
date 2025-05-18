import { Image } from "react-native";
import * as S from "./styles";

export const SplashScreen = () => {
  return (
    <S.SplashContainer>
      <S.SplashTitle>FESTO</S.SplashTitle>
      <S.SplashSubTitle>Challenge</S.SplashSubTitle>
      <S.Image>
        <Image source={require("../../assets/images/logo.png")} />
      </S.Image>
    </S.SplashContainer>
  );
};
