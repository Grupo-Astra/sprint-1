import { NavBar } from "@/components/navbar/Navbar";
import * as S from "./styles";

export const Notifications = () => {
  return (
    <S.NotificationContainer>
      <S.NotificationTitle>Notificações</S.NotificationTitle>

      <S.Nav>
        <NavBar />
      </S.Nav>
    </S.NotificationContainer>
  );
};
