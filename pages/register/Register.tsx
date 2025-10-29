import { useAuth } from "@/contexts/AuthContext";
import { RootStackParamList } from "@/types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

interface Props {
  navigation: RegisterScreenNavigationProp;
}

export function Register({ navigation }: Props) {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, isLoading, error } = useAuth();

  const handleRegister = () => {
    signUp({ username, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUserame}
        editable={!isLoading}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={!isLoading}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.buttonGap}>
            <Button title="Cadastrar" onPress={handleRegister} />
          </View>
          <Button
            title="Fazer Login"
            onPress={() => navigation.navigate("Login")}
            color="#888"
          />
        </>
      )}
    </View>
  );
}

// TODO: implementar estilos como no Figma
const styles = StyleSheet.create({
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
  },
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
});
