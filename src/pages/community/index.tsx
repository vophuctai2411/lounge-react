import Header from "@/components/header";
import search_icon from "@/assets/icons/search.svg";
import profile_icon from "@/assets/icons/profile.svg";
import Categories from "./components/categories-section";
import "./index.scss";
import PostList from "@/components/post-list";

function Community() {
  return (
    <div className="community">
      <Header>
        <div className="header-icons">
          <img src={search_icon} alt="search icon" />
          <img src={profile_icon} alt="profile icon" />
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
