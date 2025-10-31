import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { SplashScreen } from "@/pages/splash-screen/SplashScreen";
import Route from "@/routes/Route";

export default function RootLayout() {
  const { isLoading } = useAuth();

  return (
    <AuthProvider>{isLoading ? <SplashScreen /> : <Route />};</AuthProvider>
  );
}
