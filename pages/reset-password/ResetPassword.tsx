import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { resetPassword } from "@/services/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

type ResetScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ResetPassword"
>;

interface Props {
  navigation: ResetScreenNavigationProp;
}

export function ResetPassword({ navigation }: Props) {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleReset = async () => {
    setError(null);

    if (!username || !newPassword || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("As senhas não conferem.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await resetPassword({ username, newPassword });

      setIsLoading(false);
      Alert.alert("Sucesso", response.message || "Senha atualizada!", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
      ]);
    } catch (e) {
      setIsLoading(false);
      if (axios.isAxiosError(e) && e.response?.status === 404) {
        setError("Usuário não encontrado.");
      } else {
        setError("Erro ao tentar redefinir a senha.");
      }
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        editable={!isLoading}
      />
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        editable={!isLoading}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme a Nova Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        editable={!isLoading}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.buttonGap}>
            <Button title="Redefinir Senha" onPress={handleReset} />
          </View>
          <Button
            title="Voltar para o Login"
            onPress={() => navigation.navigate("Login")}
            color="#888"
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    height: 44,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  buttonGap: {
    marginBottom: 12,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
  },
});
