import styled from "styled-components/native";

export const LeituraContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const NavBarContainer = styled.View`
  height: 80px;
  background-color: #0294a6;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ContentContainer = styled.View`
  flex: 1; 
  justify-content: flex-start; 
`;

export const TitleNovaLeitura = styled.Text`
  font-size: 50px;
  text-align: center;
  margin: 50px 0;
`;

export const SentButton = styled.TouchableOpacity`
  background-color: #c6e8eb;
  padding: 15px;
  width: 50%;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
`;