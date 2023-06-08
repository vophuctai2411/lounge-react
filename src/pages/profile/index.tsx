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
                <input type="radio" defaultValue="myPost" id="myPost" />
                <label htmlFor="myPost">내가 쓴 글</label>
              </li>
              <li>
                <input type="radio" defaultValue="pickedPost" id="pickedPost" />
                <label htmlFor="pickedPost">찜한 글</label>
              </li>
            </ul>
          </div>
        </section>

        <PostList />
        {/* <section  className="post_wrap">
          <div data-v-27512d9c  className="post_container">
            <div data-v-27512d9c className="board_row">
              <div data-v-27512d9c className="post_user_profile">
                <img
                  data-v-27512d9c
                  src="https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414a8c51a.jpeg"
                  alt="프로필 이미지"
                />
                <div data-v-27512d9c>
                  <p data-v-27512d9c> universe000 </p>
                  <span data-v-0e1f7c79 data-v-27512d9c className="post_chip">
                    일상·생각
                  </span>
                </div>
              </div>
            </div>

            <div data-v-27512d9c className="board_row">
              <div
                data-v-27512d9c
                className="post_content"
                style={{
                  maxHeight: "72px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <p data-v-27512d9c>T001</p>
              </div>
            </div>
            <div data-v-27512d9c className="board_row">
              <div data-v-27512d9c className="post_info">
                <div data-v-27512d9c>
                  <img
                    data-v-27512d9c
                    src="/img/16_view.242912bb.svg"
                    alt="조회수"
                  />
                  <span data-v-27512d9c id="postInterestViewCount">
                    {" "}
                    57{" "}
                  </span>
                </div>
                <div data-v-27512d9c>
                  <img
                    data-v-27512d9c
                    src="/img/16_bookmark.e3ba1051.svg"
                    alt="찜하기"
                  />
                  <span data-v-27512d9c id="postInterestBookmarkCount">
                    {" "}
                    1{" "}
                  </span>
                </div>
                <span data-v-27512d9c className="post_time">
                  {" "}
                  6일 전{" "}
                </span>
              </div>
            </div>
            <div data-v-27512d9c className="board_row">
              <div data-v-27512d9c className="post_activity">
                <button
                  data-v-5a31b1ea
                  data-v-27512d9c
                  className="thumb_btn active_post active_pressed"
                >
                  <span data-v-5a31b1ea className="thumb_img" />
                  <span data-v-5a31b1ea className="thumb_text">
                    1
                  </span>
                </button>
                <button
                  data-v-5a31b1ea
                  data-v-27512d9c
                  className="thumb_btn active_post"
                >
                  {" "}
                  <span
                    data-v-5a31b1ea
                    className="thumb_img thumb_img_dislike"
                  />
                  <span data-v-5a31b1ea className="thumb_text">
                    싫어요
                  </span>
                </button>
                <button data-v-27512d9c className="post_comment_btn">
                  <img
                    data-v-27512d9c
                    src="/img/24_comment.a985d1ae.svg"
                    alt="댓글"
                  />
                  <span data-v-27512d9c> 12 </span>
                </button>
              </div>
            </div>
          </div>

          <div  className="no_more_post_content">
            {" "}
            더이상 게시글이 존재하지 않네요.
            <br  />
            다른 게시글을 찾아볼까요?
            <br  />
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default Profile;
