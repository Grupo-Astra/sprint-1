import { NavBar } from "@/components/navbar/Navbar";
import * as S from "./styles";

export const ComponentsList = () => {
  return (
    <S.ComponentsContainer>
      <S.ComponentsTitle>COMPONENTES</S.ComponentsTitle>

      <S.Nav>
        <NavBar />
      </S.Nav>
    </S.ComponentsContainer>
  );
};
