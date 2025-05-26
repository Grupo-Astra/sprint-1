import styled from "styled-components/native";

export const ListContainer = styled.View`
  padding: 50px;
  flex: 1;
`;

export const ItemContainer = styled.View`
  margin-bottom: 16px;
  border-top-width: 1px;
  border-top-color: #000;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  width: 500px;
`;

export const ItemTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ItemDescription = styled.Text`
  color: #555;
`;

export const ItemTime = styled.Text`
  font-size: 12px;
  color: gray;
`;
