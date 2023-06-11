import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//import './index.css'

import axios from "axios";

const URLSearch = new URLSearchParams(location.search);
axios.defaults.headers.common["C9"] = URLSearch.get("C9");
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = URLSearch.get("Authorization");
axios.defaults.headers.common["device"] = URLSearch.get("device");
axios.defaults.headers.common["osVersion"] = URLSearch.get("osVersion");
axios.defaults.headers.common["appVersion"] = URLSearch.get("appVersion");
axios.defaults.headers.common["advertisingId"] = URLSearch.get("advertisingId");
axios.defaults.headers.common["os"] = URLSearch.get("os");
axios.defaults.headers.common["mediaUserId"] = URLSearch.get("mediaUserId");
axios.defaults.headers.common["userId"] = URLSearch.get("userId");
axios.defaults.headers.common["fcmToken"] = URLSearch.get("fcmToken");
axios.defaults.headers.common["mediaId"] = URLSearch.get("mediaId");
axios.defaults.headers.common["tt"] = URLSearch.get("tt");
axios.defaults.headers.common["age"] = URLSearch.get("age");
axios.defaults.headers.common["gender"] = URLSearch.get("gender");
axios.defaults.headers.common["use-cache"] = URLSearch.get("useCache");
axios.defaults.headers.common["keep-cache"] = URLSearch.get("keepCache");

axios.interceptors.request.use(
  function (config) {
    // console.log(config, "in request config");
    // config.headers.Authorization = 'process.env.VUE_APP_CURATOR9_KEY';
    // config.headers.Authorization = `Bearer ${process.env.VUE_APP_USER_TOKEN}`;
    return config;
  },
  function (error) {
    // console.log(error, "in request error");
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (config) {
    // console.log(config, "in response config");
    return config;
  },
  function (error) {
    // console.log(error, "in response error");
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
