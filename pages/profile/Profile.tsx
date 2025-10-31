import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "@/contexts/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavBar } from "@/components/navbar/Navbar";

export function Profile() {
  const { signOut, user, isLoading } = useAuth();

  const renderProfileContent = () => {
    if (isLoading && !user) {
      return <ActivityIndicator size="large" />;
    }

    if (user) {
      return (
        <>
          <Text style={styles.title}>Perfil</Text>
          <Text style={styles.username}>Usuário: {user.username}</Text>
          <Text style={styles.info}>
            Membro desde: {new Date(user.createdAt).toLocaleDateString("pt-BR")}
          </Text>
        </>
      );
    }

    return <Text style={styles.title}>Perfil do Usuário</Text>;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Perfil do Usuário</Text>

        {renderProfileContent()}

        <View style={styles.buttonContainer}>
          <Button
            title="Sair"
            onPress={signOut}
            color="red"
            disabled={isLoading}
          />
        </View>
      </View>

      <View>
        <NavBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  username: {
    fontSize: 20,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "80%",
  },
});
