import { useAuth } from "@/contexts/AuthContext";
import { RootStackParamList } from "@/types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

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
  const { signUp } = useAuth();

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
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonGap}>
        <Button title="Cadastrar" onPress={handleRegister} />
      </View>
      <Button
        title="Fazer Login"
        onPress={() => navigation.navigate("Login")}
        color="#888"
      />
    </View>
  );
}

// TODO: implementar estilos como no Figma
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
});
