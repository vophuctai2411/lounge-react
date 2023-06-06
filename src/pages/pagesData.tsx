import { routerType } from "../types/router.types";
import Community from "./community";
import PostDetail from "./post-detail";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Community />,
    title: "home",
  },
  {
    path: "post/:id",
    element: <PostDetail />,
    title: "post detail",
  },
];

export default pagesData;
