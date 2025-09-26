import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
  ComponentsList: undefined;
  History: undefined;
  NovaLeitura: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

// faz o React Navigation reconhecer a tipagem correta globalmente
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
