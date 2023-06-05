import { routerType } from "../types/router.types";
import Community from "./community";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Community />,
    title: "home"
  },
  {
    path: "about",
    element: <Community />,
    title: "about"
  }
];

export default pagesData;