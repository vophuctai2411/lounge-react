import { routerType } from "../types/router.types";
import Community from "./community";
import PostDetail from "./post-detail";
import Searching from "./searching";
import PostWriter from "./write-post";

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
  {
    path: "search",
    element: <Searching />,
    title: "search",
  },
  {
    path: "postwriter",
    element: <PostWriter />,
    title: "postwriter",
  },
];

export default pagesData;
