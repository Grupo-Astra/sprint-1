import { SplashScreen } from "@/pages/splash-screen/SplashScreen";
import Route from "@/routes/Route";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <SplashScreen /> : <Route />}</>;
}
