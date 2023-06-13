import Header from "@/components/header";
import PostList from "@/components/post-list";
import "./index.scss";
import search_icon from "@/assets/icons/search.svg";
import { useEffect, useState } from "react";
import { getAllPost } from "@/services/community";

function Searching() {
  const [search, setSearch] = useState("");
  const [postResponse, setPostResponse] = useState<any>(null);
  const [page, setPage] = useState(1);

  async function searchAction() {
    const params = {
      searchText: search,
      perPage: 5,
      page: page,
    };
    const res = await getAllPost(params);
    if (res.data.success) {
      setPostResponse(res.data.posts);
    }
  }

  useEffect(() => {
    searchAction();
  }, [page]);

  return (
    <div className="searching-page">
      <Header />
      <div className="main">
        <section className="searchbar_wrap">
          <div className="searchbar_container">
            <input
              type="text"
              placeholder="궁금한 피드의 키워드를 입력해보세요."
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") searchAction();
              }}
            />
            <button onClick={() => searchAction()}>
              <img src={search_icon} alt="검색" />
            </button>
          </div>
        </section>
        <PostList
          data={postResponse?.data}
          getData={() => setPage((page) => page + 1)}
          isLastPage={postResponse?.current_page === postResponse?.last_page}
        />
      </div>
    </div>
  );
}

export default Searching;
