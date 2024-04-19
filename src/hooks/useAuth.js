import { useContext } from "react";

import { AuthContext } from "components/auth-provider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
