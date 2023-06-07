import Header from "@/components/header";
import search_icon from "@/assets/icons/search.svg";
import profile_icon from "@/assets/icons/profile.svg";
import "./index.scss";
import Post from "@/components/post";
import CommentList from "@/components/comment-list";
import CommentWriter from "./components/comment-writer";

function PostDetail() {
  return (
    <div className="post_detail">
      <Header>
        <div className="header-icons">
          <img src={search_icon} alt="search icon" />
          <img src={profile_icon} alt="profile icon" />
        </div>
      </Header>
      <div className="main_content">
        <div className="comment_container">
          <Post />
        </div>

        <div className="comment_writer">
          <CommentList />
        </div>
      </div>

      <div className="comment_action">
        <CommentWriter />
      </div>
    </div>
  );
}

export default PostDetail;
