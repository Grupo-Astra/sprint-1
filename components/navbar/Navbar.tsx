import { Bell, House, ListDashes } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export const NavBar = () => {
  const navigation = useNavigation();  // Hook de navegação

  return (
    <S.NavBarContainer>
      {/* Ícone ListDashes -> ComponentsList */}
      <TouchableOpacity onPress={() => navigation.navigate("ComponentsList")}>
        <ListDashes size={50} color="white" />
      </TouchableOpacity>

      {/* Ícone House -> Home */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <House size={50} color="white" />
      </TouchableOpacity>

      {/* Ícone Bell -> Notifications */}
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <Bell size={50} color="white" />
      </TouchableOpacity>
    </S.NavBarContainer>
  );
};