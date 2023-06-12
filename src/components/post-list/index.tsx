import "./index.scss";
import Post from "../post/index";
import { PostListType } from "@/types/components.type";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

function PostList({ data, getData, isLastPage }: PostListType) {
  const [isFetching, setIsFetching] = useInfiniteScroll(
    isLastPage
      ? () => {
          setIsFetching(false);
        }
      : fetchMoreListItems
  );

  async function fetchMoreListItems() {
    await getData();
    setIsFetching(false);
  }

  return (
    <div>
      {data?.map((post) => (
        <Post data={post} key={`keypost-${post.id}`} />
      ))}

      {isFetching && "Fetching more list items..."}

      {isLastPage && (
        <div className="no_more_post_content">
          더이상 게시글이 존재하지 않네요.
          <br />
          다른 게시글을 찾아볼까요?
          <br />
        </div>
      )}
    </div>
  );
}

export default PostList;
