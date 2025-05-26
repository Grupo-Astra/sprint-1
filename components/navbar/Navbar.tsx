import { RootStackParamList } from "@/types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Bell,
  ClockCounterClockwise,
  House,
  ListDashes,
} from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

export const NavBar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <S.NavBarContainer>
      <TouchableOpacity onPress={() => navigation.navigate("ComponentsList")}>
        <ListDashes size={50} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <House size={50} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <Bell size={50} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("History")}>
        <ClockCounterClockwise size={50} color="white" />
      </TouchableOpacity>
    </S.NavBarContainer>
  );
};
