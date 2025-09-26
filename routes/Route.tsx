import { ComponentsList } from "@/pages/components-lists/ComponentsList";
import { History } from "@/pages/history/History";
import { Home } from "@/pages/home/Home";
import { Notifications } from "@/pages/notifications/Notifications";
import { NovaLeitura } from "@/pages/nova-leitura";
import { RootStackParamList } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Route() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ComponentsList"
        component={ComponentsList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NovaLeitura"
        component={NovaLeitura}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
