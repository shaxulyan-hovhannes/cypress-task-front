import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTES } from "constants/common";

const ProtectedLayout = lazy(() => import("components/protected-layout"));
const Home = lazy(() => import("pages/home"));
const SignIn = lazy(() => import("pages/sign-in"));
const SignUp = lazy(() => import("pages/sign-up"));
const ProductsProvider = lazy(() => import("components/products-provider"));

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.home}
        element={
          <Suspense fallback="LOADING...">
            <ProtectedLayout>
              <ProductsProvider>
                <Home />
              </ProductsProvider>
            </ProtectedLayout>
          </Suspense>
        }
      />
      <Route
        path={ROUTES.signIn}
        element={
          <Suspense fallback="LOADING...">
            <SignIn />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.signUp}
        element={
          <Suspense fallback="LOADING...">
            <SignUp />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RoutesWrapper;
