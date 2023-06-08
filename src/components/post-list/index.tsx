import "./index.scss";
import Post from "../post/index";

function PostList() {
  return (
    <>
      <Post />
      {/*    <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
 */}
      <div data-v-5a533b84 className="no_more_post_content">
        더이상 게시글이 존재하지 않네요.
        <br />
        다른 게시글을 찾아볼까요?
        <br />
      </div>
    </>
  );
}

export default PostList;
