import "./index.scss";
import eye_icon from "@/assets/icons/eye.svg";
import comment_icon from "@/assets/icons/comment.svg";
import like_icon from "@/assets/icons/like.svg";
import dislike_icon from "@/assets/icons/dislike.svg";
import star_icon from "@/assets/icons/star.svg";

function Post() {
  return (
    <div data-v-27512d9c data-v-59cf3461 className="post_container">
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
            <img data-v-27512d9c src={eye_icon} alt="조회수" />
            <span data-v-27512d9c id="postInterestViewCount">
              37
            </span>
          </div>
          <div data-v-27512d9c>
            <img data-v-27512d9c src={star_icon} alt="찜하기" />
            <span data-v-27512d9c id="postInterestBookmarkCount">
              1
            </span>
          </div>
          <span data-v-27512d9c className="post_time">
            4일 전
          </span>
        </div>
      </div>

      <div data-v-27512d9c className="board_row">
        <div data-v-27512d9c className="post_activity">
          <button data-v-5a31b1ea data-v-27512d9c className="post_reaction_btn">
            <img
              src={like_icon}
              alt="like icon"
              className="post_reaction_img"
            />
            <span data-v-5a31b1ea className="post_reaction_text">
              좋아요
            </span>
          </button>

          <button data-v-5a31b1ea data-v-27512d9c className="post_reaction_btn">
            <img
              src={dislike_icon}
              alt="dislike icon"
              className="post_reaction_img"
            />
            <span data-v-5a31b1ea className="post_reaction_text">
              싫어요
            </span>
          </button>

          <button data-v-27512d9c className="post_reaction_btn">
            <img data-v-27512d9c src={comment_icon} alt="comment icon" />
            <span className="post_reaction_text"> 12 </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
