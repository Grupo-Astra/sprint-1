import { Image, useWindowDimensions } from "react-native";
import * as S from "./styles";

export const SplashScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <S.SplashContainer height={height}>
      <S.SplashTitle>FESTO</S.SplashTitle>
      <S.SplashSubTitle>Challenge</S.SplashSubTitle>
      <S.Image>
        <Image source={require("../../assets/images/logoAzul.png")} />
      </S.Image>
    </S.SplashContainer>
  );
};
