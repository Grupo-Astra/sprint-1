import { Home } from "@/pages/home/Home";
import { SplashScreen } from "@/pages/splash-screen/SplashScreen";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <SplashScreen /> : <Home />}</>;
}
