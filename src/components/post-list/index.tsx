import "./index.scss";
import Post from "../post/index";
import { PostListType } from "@/types/components.type";
import { useEffect, useState } from "react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

function PostList({ data, getData }: PostListType) {
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

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

      <div data-v-5a533b84 className="no_more_post_content">
        더이상 게시글이 존재하지 않네요.
        <br />
        다른 게시글을 찾아볼까요?
        <br />
      </div>
    </div>
  );
}

export default PostList;
