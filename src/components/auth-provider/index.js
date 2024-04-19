import { createContext, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "constants/common";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (user) => {
    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);

    navigate(ROUTES.home);
  };

  const value = useMemo(
    () => ({
      user,
      login,
    }),
    [user]
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!!user && user.access_token) {
      setUser(user);
    }
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
