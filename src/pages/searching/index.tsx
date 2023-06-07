import Header from "@/components/header";
import PostList from "@/components/post-list";
import "./index.scss";
import search_icon from "@/assets/icons/search.svg";

function Searching() {
  return (
    <div className="searching-page">
      <Header />
      <div className="main">
        <section data-v-0a4933a7 className="searchbar_wrap">
          <div data-v-0a4933a7 className="searchbar_container">
            <input
              data-v-0a4933a7
              type="text"
              placeholder="궁금한 피드의 키워드를 입력해보세요."
            />
            <button data-v-0a4933a7>
              <img data-v-0a4933a7 src={search_icon} alt="검색" />
            </button>
          </div>
        </section>
        <PostList />
      </div>
    </div>
  );
}

export default Searching;
