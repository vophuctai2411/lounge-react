import Header from "@/components/header";
import search_icon from "@/assets/icons/search.svg";
import profile_icon from "@/assets/icons/profile.svg";
import Categories from "./components/categories-section";
import "./index.scss";
import PostList from "@/components/post-list";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPost } from "@/services/community";

function Community() {
  const [postList, setPostList] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    console.log("hello");
    const params = {
      searchText: "",
      //"postCategories[]": /* this.postCategories */ 2,
      perPage: 5,
      page: /* this.page */ page,
    };
    const response = await getAllPost(params);
    if (response.data.success) {
      setPostList((preState) => [...preState, ...response.data.posts.data]);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="community">
      <Header>
        <div className="header-icons">
          <Link to="/search">
            <img src={search_icon} alt="search icon" />
          </Link>
          <Link to="/profile">
            <img src={profile_icon} alt="profile icon" />
          </Link>
        </div>
      </Header>
      <div className="posts">
        <Categories />
        <PostList data={postList} getData={() => setPage((page) => page + 1)} />
      </div>
    </div>
  );
}

export default Community;
