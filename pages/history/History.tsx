import { ListHistory } from "@/components/list-history/ListHistory";
import React from "react";
import * as S from "./styles";

export const History = () => {
  return (
    <S.ContainerHistory>
      <S.HistoryTitle>Histórico de Funcionamento</S.HistoryTitle>

      <ListHistory />
      {/* <S.Nav>
        <NavBar />
      </S.Nav> */}
    </S.ContainerHistory>
  );
};
