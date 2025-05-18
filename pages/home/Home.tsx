import { NavBar } from "@/components/navbar/Navbar";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeTitle>Bem-vindo</S.HomeTitle>
        
      <S.Nav>
        <NavBar />
      </S.Nav>
    </S.HomeContainer>
  );
};
