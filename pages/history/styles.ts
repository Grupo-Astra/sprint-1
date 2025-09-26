import { Dimensions } from 'react-native';
import styled from "styled-components/native";

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 768;

export const ContainerHistory = styled.ScrollView`
  flex: 1;
  padding-bottom: 40px;
  padding-top: 650px;
`;

export const ContButton = styled.View`
  display: flex;
  align-items: center;
  padding-bottom: 60px;
  gap: 20px;
`;

export const ContentRow = styled.View`
  flex: 1;
  flex-direction: ${isSmallScreen ? 'column-reverse' : 'row'};
  padding: ${isSmallScreen ? '10px' : '20px'};
`;

export const ListColumn = styled.View`
  flex: ${isSmallScreen ? '0' : '1'};
  width: ${isSmallScreen ? '100%' : 'auto'};
  margin-right: ${isSmallScreen ? '0px' : '10px'};
  margin-bottom: ${isSmallScreen ? '20px' : '0px'};
  min-height: ${isSmallScreen ? '300px' : 'auto'};
`;

export const GraphColumn = styled.View`
  flex: ${isSmallScreen ? '0' : '1'};
  width: ${isSmallScreen ? '100%' : 'auto'};
  margin-left: ${isSmallScreen ? '0px' : '10px'};
  min-height: ${isSmallScreen ? '300px' : 'auto'};
`;


export const ButtonHistory = styled.TouchableOpacity`
  background-color: #c6e8eb;
  padding: ${isSmallScreen ? '15px' : '20px'};
  width: ${isSmallScreen ? '50%' : '200px'};
  border: 1px solid #000;
`;

export const NavBarContainer = styled.View`
  height: 80px;
  background-color: #0294a6;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

