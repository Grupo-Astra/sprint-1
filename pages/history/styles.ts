import { Fonts } from "@/styles/Fonts";
import styled from "styled-components/native";

export const ContainerHistory = styled.View`
  flex: 1;
  padding-bottom: 40px;
`;

export const HistoryTitle = styled.Text`
  text-align: center;
  font-size: 40px;
  font-family: ${Fonts.Cinzel};
  margin-top: 2rem;
`;
export const ContButton = styled.View`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;
export const ButtonHistory = styled.TouchableOpacity`
  background-color: #c6e8eb;
  text-align: center;
  padding: 20px;
  font-size: 25px;
  width: 200px;
  border: 1px solid #000;
`;
export const Nav = styled.View`
  margin-bottom: 0;
`;
