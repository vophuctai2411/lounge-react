import Header from "@/components/header";
import search_icon from "@/assets/icons/search.svg";
import profile_icon from "@/assets/icons/profile.svg";
import Categories from "./components/categories-section";
import "./index.scss";
import PostList from "@/components/post-list";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPost } from "@/services/community";
import scroll_top_icon from "@/assets/icons/scroll_top.svg";
import pencil_icon from "@/assets/icons/pencil.svg";

function Community() {
  const location = useLocation();
  const [postResponse, setPostResponse] = useState<any>(null);
  const [postList, setPostList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [chosenCategory, setChosenCategory] = useState<number>(0);
  const [isShowScrollTop, setIsShowScrollTop] = useState(false);

  const [isUseStorageData, setIsUseStorageData] = useState(false);

  const getData = async () => {
    const params = {
      ...(chosenCategory && { "postCategories[]": chosenCategory }),
      perPage: 5,
      page: page,
    };
    const response = await getAllPost(params);
    if (response.data.success) {
      setPostList((preState) => {
        if (page == 1) {
          return response.data.posts.data;
        }

        const fisrtResponse = response.data.posts.data[0];
        const existedIdArr = preState?.reduce(
          (previousArray: any[], currentItem: any) => [
            ...previousArray,
            currentItem.id,
          ],
          []
        );
        if (
          existedIdArr.includes(fisrtResponse?.id) ||
          response.data.posts.data.length == 0
        )
          return preState;
        else return [...preState, ...response.data.posts.data];
      });
      setPostResponse(response.data.posts);
    }
  };

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (isUseStorageData) {
      //setIsUseStorageData(false);
      return;
    }

    if (page > postResponse?.current_page || page == 1) getData();
  }, [page, chosenCategory]);

  useEffect(() => {
    if (isUseStorageData) {
      // setIsUseStorageData(false);
      return;
    }
    setPage(1);
  }, [chosenCategory]);

  function scrollFunction() {
    console.log(window.scrollY);
    localStorage.setItem("boardScroll", JSON.stringify(window.scrollY));
    // setIsUseStorageData(false);

    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setIsShowScrollTop(true);
    } else {
      setIsShowScrollTop(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction, false);

    if (localStorage.getItem("boardPage")) {
      const boardPage = localStorage.getItem("boardPage");
      const boardData = localStorage.getItem("boardData");
      const boardchosenCategory = localStorage.getItem("boardchosenCategory");

      // boardPage && setPage(JSON.parse(boardPage));
      boardData && setPostList(JSON.parse(boardData));
      // boardchosenCategory &&
      //   setChosenCategory(Number(JSON.parse(boardchosenCategory)));

      setIsUseStorageData(true);
    }

    return () => window.removeEventListener("scroll", scrollFunction, false);
  }, []);

  useEffect(() => {
    console.log(postList.length);

    // if (isUseStorageData) {
    //   const boardScroll = localStorage.getItem("boardScroll");
    //   boardScroll && scrollTo(0, JSON.parse(boardScroll));
    //   setIsUseStorageData(false);
    // }
  }, [postList]);

  useEffect(() => {
    return () => {
      localStorage.setItem(
        "boardchosenCategory",
        JSON.stringify(chosenCategory)
      );
      localStorage.setItem("boardData", JSON.stringify(postList));
      localStorage.setItem("boardPage", JSON.stringify(page));
    };
  }, [chosenCategory, postList, page]);

  return (
    <div className="wrap">
      <Header>
        <>
          <button>
            <Link to={`/search${location.search}`}>
              <img src={search_icon} alt="search icon" />
            </Link>
          </button>

          <button>
            <Link to={`/profile${location.search}`}>
              <img src={profile_icon} alt="profile icon" />
            </Link>
          </button>
        </>
      </Header>
      <div className="posts">
        <Categories
          chosenCategory={chosenCategory}
          setChosenCategory={setChosenCategory}
        />

        <PostList
          data={postList}
          newPage={() => setPage((page) => page + 1)}
          isLastPage={postResponse?.current_page >= postResponse?.last_page}
        />
      </div>

      <div
        className="floating_btn_wrap"
        style={{ bottom: "20px", transition: "bottom 0.5s ease 0s" }}
      >
        {isShowScrollTop && (
          <button
            className="floating_scroll_top_btn"
            onClick={() => scrollTop()}
          >
            <img src={scroll_top_icon} alt="스크롤 위로" />
          </button>
        )}
        <button className="floating_write_btn">
          <Link to={`/postwriter${location.search}`}>
            <img src={pencil_icon} alt="글쓰기" />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Community;
