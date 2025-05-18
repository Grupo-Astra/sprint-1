import { Bell, House, ListDashes } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

export const NavBar = () => {
  return (
    <S.NavBarContainer>
      <TouchableOpacity>
        <ListDashes size={50} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <House size={50} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Bell size={50} color="white" />
      </TouchableOpacity>
    </S.NavBarContainer>
  );
};
