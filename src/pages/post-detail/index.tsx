import Header from "@/components/header";
import search_icon from "@/assets/icons/search.svg";
import profile_icon from "@/assets/icons/profile.svg";
import "./index.scss";
import PostList from "@/components/post-list";

function PostDetail() {
  return (
    <div className="post_detail">
      <Header>
        <div className="header-icons">
          <img src={search_icon} alt="search icon" />
          <img src={profile_icon} alt="profile icon" />
        </div>
      </Header>
      <div className="comment_container">
        <PostList />
      </div>

      <div className="comment_writer"></div>
    </div>
  );
}

export default PostDetail;
