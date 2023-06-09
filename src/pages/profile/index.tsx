import Header from "@/components/header";
import "./index.scss";
import PostList from "@/components/post-list";

function Profile() {
  return (
    <div className="profile_page wrap">
      <Header />
      <main style={{ background: "rgb(249, 250, 251)" }}>
        <section className="profile_wrap">
          <div className="profile_container">
            <div className="profile_img">
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414a8c51a.jpeg"
                alt="프로필 이미지"
              />
            </div>
            <div className="profile_info">
              <p>universe000</p>
              <button>내 정보 수정</button>
            </div>
          </div>
        </section>
        <section>
          <div className="board_row">
            <ul className="select_post_container">
              <li>
                <input
                  type="radio"
                  name="Mypost and wishlist group"
                  defaultValue="myPost"
                  id="myPost"
                />
                <label htmlFor="myPost">내가 쓴 글</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="Mypost and wishlist group"
                  defaultValue="pickedPost"
                  id="pickedPost"
                />
                <label htmlFor="pickedPost">찜한 글</label>
              </li>
            </ul>
          </div>
        </section>

        <PostList />
      </main>
    </div>
  );
}

export default Profile;
