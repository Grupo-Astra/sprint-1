import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonGap}>
        <Button
          title="Login"
          onPress={() => console.log("Login selecionado")} // Placeholder
        />
      </View>
      <Button
        title="Cadastrar"
        onPress={() => console.log("Cadastro selecionado")} // Placeholder
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
