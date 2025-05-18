import * as S from "./styles";
import { NavBar } from "@/components/navbar/Navbar";

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeTitle>COMPONENTES</S.HomeTitle>

      <S.Nav>
        <NavBar />
      </S.Nav>
    </S.HomeContainer>
  );
};
