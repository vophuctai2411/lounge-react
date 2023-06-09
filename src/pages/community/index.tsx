import Header from "@/components/header";
import search_icon from "@/assets/icons/search.svg";
import profile_icon from "@/assets/icons/profile.svg";
import Categories from "./components/categories-section";
import "./index.scss";
import PostList from "@/components/post-list";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllPost } from "@/services/community";

function Community() {
  useEffect(() => {}, []);

  useEffect(() => {
    const getData = async () => {
      const params = {
        searchText: "",
        "postCategories[]": /* this.postCategories */ 2,
        perPage: 30,
        page: /* this.page */ 1,
      };
      const response = await getAllPost(params);
      console.log(response);
    };

    getData();
  }, []);
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
        <PostList />
      </div>
    </div>
  );
}

export default Community;
