import Header from "@/components/header";
import "./index.scss";
import writer_select_category from "@/assets/icons/writer_select_category.svg";
import writer_warning_mark from "@/assets/icons/writer_warning_mark.svg";
import writer_close_warning from "@/assets/icons/writer_close_warning.svg";
import writer_close_image from "@/assets/icons/writer_close_image.svg";
import writer_upload_image from "@/assets/icons/writer_upload_image.svg";

function PostWriter() {
  return (
    <div className="wrap post-writer-container">
      <Header />
      <button className="select_category">
        <span>가족이야기</span>
        <img src={writer_select_category} alt="icon select category" />
      </button>

      <main>
        <section className="write_post_wrap">
          <div data-v-2357f178>
            <div data-v-2357f178 className="write_post_container">
              <div data-v-2357f178 className="board_row">
                <div data-v-2357f178 className="write_post_warning">
                  <p data-v-2357f178 className="write_post_warning_title">
                    <img
                      data-v-2357f178
                      src={writer_warning_mark}
                      alt="writer warning mark"
                    />{" "}
                    글 작성 주의사항{" "}
                    <button data-v-2357f178>
                      <img
                        data-v-2357f178
                        src={writer_close_warning}
                        alt="writer close warning"
                      />
                    </button>
                  </p>
                  <p data-v-2357f178 className="write_post_warning_content">
                    {" "}
                    눈팅 앱에서 규정한 운영규칙 위반 내용의 게시물 작성 시
                    커뮤니티 이용에 제한이 생길 수 있습니다.{" "}
                  </p>
                </div>
              </div>
              <div data-v-2357f178 className="write_post_img">
                <div data-v-2357f178>
                  <img
                    data-v-2357f178
                    src="blob:https://dev.front.lounge.tdi9.com/761d25b5-a218-4433-8363-0e8a41fb3908"
                  />
                  <button data-v-2357f178>
                    <img
                      data-v-2357f178
                      src={writer_close_image}
                      alt="writer close image"
                    />
                  </button>
                  <span data-v-2357f178>0.00MB</span>
                </div>
                <div data-v-2357f178>
                  <img
                    data-v-2357f178
                    src="blob:https://dev.front.lounge.tdi9.com/f76ceb63-d84a-4d29-b668-b4f2f7e6efa2"
                  />
                  <button data-v-2357f178>
                    <img
                      data-v-2357f178
                      src="/img/24_img_close.bc7af4aa.svg"
                      alt="닫기"
                    />
                  </button>
                  <span data-v-2357f178>0.00MB</span>
                </div>
                <div data-v-2357f178>
                  <img
                    data-v-2357f178
                    src="blob:https://dev.front.lounge.tdi9.com/7a98a15b-27f5-4ecc-9725-c00e2f9ccd26"
                  />
                  <button data-v-2357f178>
                    <img
                      data-v-2357f178
                      src="/img/24_img_close.bc7af4aa.svg"
                      alt="닫기"
                    />
                  </button>
                  <span data-v-2357f178>0.00MB</span>
                </div>
                <div data-v-2357f178>
                  <img
                    data-v-2357f178
                    src="blob:https://dev.front.lounge.tdi9.com/f367ead5-d160-4143-8461-4396a4d1a712"
                  />
                  <button data-v-2357f178>
                    <img
                      data-v-2357f178
                      src="/img/24_img_close.bc7af4aa.svg"
                      alt="닫기"
                    />
                  </button>
                  <span data-v-2357f178>0.00MB</span>
                </div>
              </div>
              <div data-v-2357f178 className="board_row">
                <div
                  data-v-2357f178
                  className="write_post_content"
                  style={{ height: "50vh" }}
                >
                  <textarea
                    data-v-2357f178
                    placeholder="눈팅러의 이야기를 들려주세요."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div data-v-2357f178>
              <input
                data-v-2357f178
                type="file"
                accept="image/png, image/gif, image/jpeg"
                multiple={true}
                style={{ display: "none" }}
              />
            </div>
            <button data-v-2357f178 className="write_post_footer">
              <img
                data-v-2357f178
                src={writer_upload_image}
                alt="upload image"
              />
              <p data-v-2357f178>
                {" "}
                4/10 <span data-v-2357f178> (0.00MB / 100MB) </span>
              </p>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PostWriter;
