import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  //  Auto login on refresh
 useEffect(() => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  if (token && storedUser) {
    try {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    } catch {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }
}, []);

  //  Login function
  const login = (token: string, user: User) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setIsLoggedIn(true);
    setUser(user);
  };

  //  Logout function
  const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  setIsLoggedIn(false);
  setUser(null);
};

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
