import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextData {
  userToken: string | null;
  isLoading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  signUp: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // TODO: checar token salvo (fase de conexão da API)
      setIsLoading(false);
    }, 1500);
  }, []);

  // TODO: substituir mocks pelas implementações reais (após conexão na API)
  const signIn = async () => {
    console.log("Mock: SignIn");
    setIsLoading(true);
    setTimeout(() => {
      setUserToken("dummy-token");
      setIsLoading(false);
    }, 500);
  };

  const signUp = async () => {
    console.log("Mock: SignUp");
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
