import { Navigate } from "react-router-dom";

import useAuth from "hooks/useAuth";

import { ROUTES } from "constants/common";

export const ProtectedLayout = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={ROUTES.signIn} />;
  }

  return children;
};

export default ProtectedLayout;
