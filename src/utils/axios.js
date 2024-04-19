import axios from "axios";

import { getCookie } from "./common";

import { ROUTES } from "constants/common";

const baseURL = "http://localhost:3001";
// In the real world project should be saved in .env file as REACT_APP_BASE_URL (for example)

const instance = axios.create({
  baseURL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    config.withXSRFToken = true;

    const accessToken = JSON.parse(localStorage.getItem("user"))?.access_token;

    if (accessToken && !config?.withoutAccessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    const xsrfToken = getCookie("XSRF-TOKEN");

    if (xsrfToken) {
      config.headers["X-XSRF-TOKEN"] = xsrfToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorStatusCode = error.response.status;

    if (errorStatusCode === 401 || errorStatusCode === 403) {
      window.location.href = `${window.location.origin}${ROUTES.signIn}`;
      // AD-TO-DO need to refactoring
    }
    console.log("ERRRRRRRRRRRR", typeof error.response.status);
    return Promise.reject(error);
  }
);

export default instance;
