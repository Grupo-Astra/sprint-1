import { NavBar } from "@/components/navbar/Navbar";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as S from "./styles";

export const Home = () => {
  return (
    <SafeAreaProvider>
      <S.HomeContainer>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <S.ContentWrapper>
            <S.HomeTitle>ASTRA</S.HomeTitle>
            <S.Presentation>
              O projeto desenvolvido para a Festo consiste na criação de um
              gêmeo digital de um sistema pneumático de balancim utilizado no
              corte de materiais para calçados. Que tem por objetivos simular
              digitalmente o equipamento físico em operação, monitorar em tempo
              real o status de todos os componentes, prevenir falhas através de
              análises preditivas e reduzir tempo de inatividade por manutenção.
            </S.Presentation>
          </S.ContentWrapper>

          <S.ImageWrapper>
            <S.LogoImage
              source={require("../../assets/images/logoBranca.png")}
              style={{ paddingBottom: 120 }}
            />
          </S.ImageWrapper>
        </ScrollView>

        <S.Nav>
          <NavBar />
        </S.Nav>
      </S.HomeContainer>
    </SafeAreaProvider>
  );
};
