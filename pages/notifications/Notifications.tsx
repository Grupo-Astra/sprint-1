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

  const removeNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...baseNotificationData].sort(
        () => 0.5 - Math.random()
      );
      const randomIndex = Math.floor(
        Math.random() * baseNotificationData.length
      );
      const selected = shuffled[randomIndex];

      setNotifications((prev) => [selected, ...prev]);
    }, 2700);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.NotificationContainer>
      <S.NotificationTitle>NOTIFICAÇÕES</S.NotificationTitle>

      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={notifications}
            renderItem={({ item, index }) => (
              <Examples
                title={item.title}
                description={item.description}
                onDelete={() => removeNotification(index)}
              />
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
