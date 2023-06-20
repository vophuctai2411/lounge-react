import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getMyInfo, get_all_categories } from "./services/community";
import { categoryType } from "./types/components.type";
import { useDispatch } from "react-redux";
import { saveCategories } from "./slices/categorySlice";
import { useEffect } from "react";

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

function App() {
  const dispatch = useDispatch();
  const isErrorPage =
    (!URLSearch.get("Authorization") || !URLSearch.get("userId")) &&
    !window.location.pathname.includes("/404");
  if (isErrorPage) window.location.replace("/404");
  else {
    useQuery({
      queryKey: ["categories_Query"],
      queryFn: () =>
        get_all_categories().then((response) => response.data.postCategories),
      onSuccess: (data) => {
        const postCategories: categoryType[] = data;
        dispatch(saveCategories(postCategories));
      },
      staleTime: Infinity,
    });

    useQuery({
      queryKey: ["myInfo"],
      queryFn: () => getMyInfo().then((res) => res.data.user),
      staleTime: Infinity,
    });
  }

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
