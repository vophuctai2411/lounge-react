import Header from "@/components/header";
import search_icon from "@/assets/icons/search.svg";
import profile_icon from "@/assets/icons/profile.svg";
import Categories from "./components/categories-section";
import "./index.scss";
import PostList from "@/components/post-list";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getAllPost } from "@/services/community";
import scroll_top_icon from "@/assets/icons/scroll_top.svg";
import pencil_icon from "@/assets/icons/pencil.svg";

function Community() {
  const location = useLocation();
  const [postResponse, setPostResponse] = useState<any>(null);
  const [postList, setPostList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [chosenCategory, setChosenCategory] = useState<number>();
  const previousChosenCategory = useRef<any>();

  const getData = async () => {
    const isChangeCategory = previousChosenCategory.current !== chosenCategory;

    const params = {
      ...(chosenCategory && { "postCategories[]": chosenCategory }),
      perPage: 5,
      page: isChangeCategory ? 1 : page,
    };
    const response = await getAllPost(params);
    if (response.data.success) {
      setPostList((preState) => {
        if (isChangeCategory) {
          previousChosenCategory.current = chosenCategory;
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
        if (existedIdArr.includes(fisrtResponse.id)) return preState;
        else return [...preState, ...response.data.posts.data];
      });
      setPostResponse(response.data.posts);
    }
  };

  useEffect(() => {
    getData();
  }, [page, chosenCategory]);

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
        <Categories setChosenCategory={setChosenCategory} />
        <PostList
          data={postList}
          getData={() => setPage((page) => page + 1)}
          isLastPage={postResponse?.current_page === postResponse?.last_page}
        />
      </div>

      <div
        className="floating_btn_wrap"
        style={{ bottom: "20px", transition: "bottom 0.5s ease 0s" }}
      >
        <button className="floating_scroll_top_btn" style={{}}>
          <img src={scroll_top_icon} alt="스크롤 위로" />
        </button>
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
