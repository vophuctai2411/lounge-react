import "./index.scss";
import Post from "../post/index";
import { PostListType } from "@/types/components.type";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import InfiniScrollSpinner from "@/components/infiniteScrollSpinner";
import { useEffect, useState } from "react";

function PostList({ data, getData, isLastPage }: PostListType) {
  // const [isFetching, setIsFetching] = useInfiniteScroll(
  //   isLastPage
  //     ? () => {
  //         setIsFetching(false);
  //       }
  //     : fetchMoreListItems
  // );

  // async function fetchMoreListItems() {
  //   getData();
  // }

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // if (isFetching) {
  //   try {
  //     getData();
  //   } finally {
  //     setIsFetching(false);
  //   }
  // }

  async function fetchingData() {
    await getData();
    console.log("fetching");
    setIsFetching(false);
  }

  useEffect(() => {
    console.log(isFetching);
    if (isFetching) fetchingData();
  }, [isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 20 >=
        document.documentElement.offsetHeight &&
      !isLastPage
    )
      setIsFetching(true);
    // else {
    //   setIsFetching(false);
    // }
  }

  return (
    <div>
      {data?.map((post) => (
        <Post data={post} key={`keypost-${post.id}`} />
      ))}

      {isFetching && <InfiniScrollSpinner />}

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
