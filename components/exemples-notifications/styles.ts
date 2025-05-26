import { Fonts } from "@/styles/Fonts";
import styled from "styled-components/native";

export const ExampleContainer = styled.View`
  background-color: #f0f0f0;
  padding: 20px;
`;
export const ExampleTitle = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.Jaldi};
`;
export const ExCont = styled.View`
  height: auto;
  border: 3px solid #000;
  padding: 10px;
  border-radius: 15px;
  display: flex;
`;
export const ExampleDescription = styled.Text`
  font-size: 13px;
  font-family: ${Fonts.Jaldi};
`;
export const ContIcons = styled.TouchableOpacity`
  flex-direction: row-reverse;
`;
