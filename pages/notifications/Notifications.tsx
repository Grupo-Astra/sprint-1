import { Examples } from "@/components/exemples-notifications/Examples";
import { ExampleProps } from "@/components/exemples-notifications/props";
import { NavBar } from "@/components/navbar/Navbar";
import { baseNotificationData } from "@/data/NotificationData";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";

export const Notifications = () => {
  const [notifications, setNotifications] = useState<ExampleProps[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...baseNotificationData].sort(
        () => 0.5 - Math.random()
      );
      const selected = shuffled.slice(0, 1);

      setNotifications((prev) => [...selected, ...prev]);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.NotificationContainer>
      <S.NotificationTitle>Notificações</S.NotificationTitle>

      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={notifications}
            renderItem={({ item }) => (
              <Examples title={item.title} description={item.description} />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </SafeAreaView>
      </SafeAreaProvider>

      <S.Nav>
        <NavBar />
      </S.Nav>
    </S.NotificationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
