import { AxiosResponse } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/Api";

interface AuthContextData {
  signed: boolean;
  user: User | null;
  Login(email: string, password: string): Promise<AxiosResponse>;
  Logout(): void;
}

interface User {
  id: string;
  full_name: string;
  email: string;
  created_at: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("@App:user");
    const storedToken = localStorage.getItem("@App:token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      api.defaults.headers.Authorization = `Bearer ${storedToken}`;
    }
  }, []);

  const Login = async (email: string, password: string): Promise<AxiosResponse> => {
    try {
      const response = await api.post("/api/v1/authentication/signIn", { email, password });
      setUser(response.data.user);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      localStorage.setItem("@App:user", JSON.stringify(response.data.user));
      localStorage.setItem("@App:token", response.data.token);
      return response;
    } catch (err) {
      throw new Error("Erro ao realizar login.");
    }
  };

  const Logout = () => {
    const BASE_PATH = import.meta.env.VITE_BASE_PATH_FRONTEND || "/sales-manager/";
    setUser(null);

    localStorage.removeItem("@App:user");
    localStorage.removeItem("App:token");

    window.location.href = BASE_PATH;
  };

  return <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
