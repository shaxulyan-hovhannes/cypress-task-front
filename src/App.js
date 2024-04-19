import React from "react";

import AuthProvider from "components/auth-provider";
import RoutesWrapper from "components/routes-wrapper";

function App() {
  return (
    <AuthProvider>
      <RoutesWrapper />
    </AuthProvider>
  );
}

export default App;
