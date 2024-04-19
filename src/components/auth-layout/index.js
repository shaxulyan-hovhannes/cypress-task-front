import React from "react";
import PropTypes from "prop-types";

const AuthLayout = ({ children, variation = "sign-in" }) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout-title">
        {variation === "sign-in" ? "Login Page" : "Register Page"}
      </div>
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  variation: PropTypes.oneOf(["sign-in", "sign-up"]),
};

export default AuthLayout;
