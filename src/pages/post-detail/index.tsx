import Header from "@/components/header";
import search_icon from "@/assets/icons/search.svg";
import profile_icon from "@/assets/icons/profile.svg";
import "./index.scss";
import CommentList from "@/components/comment-list";
import CommentWriter from "./components/comment-writer";
import Post from "@/components/post";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPostByID } from "@/services/community";

function PostDetail() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["postDetail_Query", id],
    queryFn: () => getPostByID(id).then((response) => response.data?.post),
  });

  return (
    <div className="post_detail">
      <Header>
        <div className="header-icons">
          <img src={search_icon} alt="search icon" />
          <img src={profile_icon} alt="profile icon" />
        </div>
      </Header>
      <div className="main_content">
        <div className="comment_container">{data && <Post data={data} />}</div>

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
