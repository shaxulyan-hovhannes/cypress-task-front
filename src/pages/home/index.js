import React, { lazy, Suspense, Fragment, useEffect } from "react";

import useAuth from "hooks/useAuth";

import { ROLES } from "constants/common";

const AdminHome = lazy(() => import("pages/home/partials/admin"));
const UserHome = lazy(() => import("pages/home/partials/user"));

const Home = () => {
  const { user } = useAuth();

  if (!user) return null;

  if (user.role === ROLES.user) {
    return (
      <Suspense fallback={<Fragment />}>
        <UserHome />
      </Suspense>
    );
  }

  if (user.role === ROLES.admin) {
    return (
      <Suspense fallback={<Fragment />}>
        <AdminHome />
      </Suspense>
    );
  }
};

export default Home;
