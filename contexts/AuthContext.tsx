import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";
import api, { setupAuthInterceptor } from "@/services/api";
import { Credentials } from "@/types/credentials";
import axios from "axios";

const TOKEN_KEY = "user_token";

async function saveToken(token: string): Promise<void> {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (error) {
    console.error("Erro ao salvar o token", error);
  }
}

async function getToken(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(TOKEN_KEY);
  } catch (error) {
    console.error("Erro ao ler o token", error);
    return null;
  }
}

async function removeToken(): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
    console.error("Erro ao remover o token", error);
  }
}

interface AuthContextData {
  userToken: string | null;
  isLoading: boolean;
  error: string | null;
  signIn: (credentials: Credentials) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (credentials: Credentials) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTokenFromStorage() {
      const storedToken = await getToken();
      if (storedToken) {
        api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
        setUserToken(storedToken);
      }
      setIsLoading(false);
    }
    loadTokenFromStorage();
  }, []);

  const signIn = useCallback(async ({ username, password }: Credentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.post("/auth/login", { username, password });
      const { token } = response.data;

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await saveToken(token);
        setUserToken(token);
      } else {
        setError("Token não recebido da API.");
      }
    } catch (e) {
      console.error("Erro no signIn:", e);
      if (axios.isAxiosError(e) && e.response?.status == 401) {
        setError("Usuário ou senha inválidos.");
      } else {
        setError("Não foi possível conectar ao servidor.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUp = useCallback(
    async ({ username, password }: Credentials) => {
      setIsLoading(true);
      setError(null);

      try {
        await api.post("/auth/register", { username, password });
        await signIn({ username, password });
      } catch (e) {
        console.error("Erro no signUp:", e);
        if (axios.isAxiosError(e) && e.response?.status === 409) {
          setError("Este nome de usuário já está em uso.");
        } else {
          setError("Erro ao tentar registrar.");
        }
        setIsLoading(false);
      }
    },
    [signIn],
  );

  const signOut = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      await removeToken();
      delete api.defaults.headers.common["Authorization"];
      setUserToken(null);
    } catch (e) {
      console.error("Erro no signOut:", e);
      setError("Erro ao tentar sair.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setupAuthInterceptor(signOut);
  }, [signOut]);

  return (
    <AuthContext.Provider
      value={{ userToken, isLoading, error, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
