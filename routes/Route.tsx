import { useAuth } from "@/contexts/AuthContext";
import { ComponentsList } from "@/pages/components-lists/ComponentsList";
import { History } from "@/pages/history/History";
import { Home } from "@/pages/home/Home";
import { Login } from "@/pages/login/Login";
import { Notifications } from "@/pages/notifications/Notifications";
import { NovaLeitura } from "@/pages/nova-leitura";
import { Register } from "@/pages/register/Register";
import { RootStackParamList } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStackNav = createNativeStackNavigator<RootStackParamList>();
const AuthStackNav = createNativeStackNavigator<RootStackParamList>();

function AppStack() {
  return (
    <AppStackNav.Navigator initialRouteName="Home">
      <AppStackNav.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <AppStackNav.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <AppStackNav.Screen
        name="ComponentsList"
        component={ComponentsList}
        options={{ headerShown: false }}
      />
      <AppStackNav.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
      <AppStackNav.Screen
        name="NovaLeitura"
        component={NovaLeitura}
        options={{ headerShown: false }}
      />
    </AppStackNav.Navigator>
  );
}

function AuthStack() {
  return (
    <AuthStackNav.Navigator initialRouteName="Login">
      <AuthStackNav.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </AuthStackNav.Navigator>
  );
}

export default function Route() {
  const { userToken } = useAuth();

  return <>{userToken ? <AppStack /> : <AuthStack />}</>;
}
