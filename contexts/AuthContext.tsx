import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";
import api from "@/services/api";
import { Credentials } from "@/types/credentials";

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

  const signIn = async ({ username, password }: Credentials) => {
    console.log("Mock: SignIn", username);
    setIsLoading(true);

    setTimeout(() => {
      setUserToken("dummy-token-signin");
      setIsLoading(false);
    }, 500);
  };

  const signUp = async ({ username, password }: Credentials) => {
    console.log("Mock: SignUp", username);
    setIsLoading(true);

    setTimeout(() => {
      setUserToken("dummy-token-signup");
      setIsLoading(false);
    }, 500);
  };

  const signOut = async () => {
    console.log("Mock: SignOut");
    setIsLoading(true);

    setTimeout(() => {
      setUserToken(null);
      setIsLoading(false);
    }, 500);
  };

  return (
    <AuthContext.Provider
      value={{ userToken, isLoading, signIn, signOut, signUp }}
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
