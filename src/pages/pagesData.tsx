import { routerType } from "../types/router.types";
import Community from "./community";
import PostDetail from "./post-detail";
import Searching from "./searching";
import PostWriter from "./write-post";
import Profile from "./profile";
import Blocked from "./blocked";

const pagesData: routerType[] = [
  {
    path: "/board",
    element: <Community />,
    title: "home",
  },
  {
    path: "detail/:id",
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
  {
    path: "profile",
    element: <Profile />,
    title: "profile",
  },
  {
    path: "blocked-user",
    element: <Blocked />,
    title: "block-user",
  },
];

export default pagesData;
