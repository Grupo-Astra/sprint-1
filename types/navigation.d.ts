import type { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Notifications: undefined;
      ComponentsList: undefined;
    }
  }
}

export type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
  ComponentsList: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;
