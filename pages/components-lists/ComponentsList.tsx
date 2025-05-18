import { NavBar } from "@/components/navbar/Navbar";
import * as S from "./styles";

export const ComponentsList = () => {
  return (
    <S.ComponentsContainer>
      <S.ComponentsTitle>Lista De Componentes</S.ComponentsTitle>

      <S.Nav>
        <NavBar />
      </S.Nav>
    </S.ComponentsContainer>
  );
};
