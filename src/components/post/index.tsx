import "./index.scss";
import eye_icon from "@/assets/icons/eye.svg";
import comment_icon from "@/assets/icons/comment.svg";
import like_icon from "@/assets/icons/like.svg";
import dislike_icon from "@/assets/icons/dislike.svg";
import star_icon from "@/assets/icons/star.svg";
import Reaction from "@/components/reaction";
import { PostType } from "@/types/components.type";
import Deafult_Avatar_Image from "@/assets/images/deafault_avatar.svg";

function Post({ data }: PostType) {
  // const data = {
  //   id: 2149,
  //   subject: "default subject",
  //   content:
  //     "\ub4f1\ub85d \uac24\ub7ec\ub9ac \ud14c\uc2a4\ud2b8\r\n\r\n\uc218\uc815\ub3c4 \ud14c\uc2a4\ud2b8\r\n\r\n\uc11d\ub958\uc0ad\uc81c \ucfe0\ud0a4\ucd94\uac00",
  //   post_category_id: 1,
  //   view_count: 34,
  //   board_id: 1,
  //   user_id: 14,
  //   is_secret: 0,
  //   is_draft: 0,
  //   created_at: "2023-03-30 14:15:00",
  //   updated_at: "2023-03-30 14:15:54",
  //   comments_count: 1,
  //   user: {
  //     id: 14,
  //     name: "universe000",
  //     level: 1,
  //     profile_image: {
  //       id: 295,
  //       user_id: 14,
  //       url: "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262601_640841499ba35.jpeg",
  //       url_180:
  //         "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414a8c51a.jpeg",
  //       url_340:
  //         "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414aa8285.jpeg",
  //       url_720:
  //         "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414ac78ff.jpeg",
  //       url_1024:
  //         "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414aea311.jpeg",
  //     },
  //     media: null,
  //   },
  //   is_auth_user_liked: false,
  //   is_auth_user_disliked: true,
  //   is_auth_user_picked: false,
  //   emotion: {
  //     like: 0,
  //     dislike: 1,
  //   },
  //   picker_count: 0,
  //   images: [
  //     {
  //       id: 319,
  //       post_id: 2149,
  //       url: "https://loungest.blob.core.windows.net/lounge/images/2/2023/3/30/1680153301_64251ad54cd6c.jpeg",
  //       url_180:
  //         "https://loungest.blob.core.windows.net/lounge/images/2/2023/3/30/1680153301_64251ad555bdb.jpeg",
  //       url_340:
  //         "https://loungest.blob.core.windows.net/lounge/images/2/2023/3/30/1680153301_64251ad55f73b.jpeg",
  //       url_720:
  //         "https://loungest.blob.core.windows.net/lounge/images/2/2023/3/30/1680153301_64251ad5626b1.jpeg",
  //       url_1024:
  //         "https://loungest.blob.core.windows.net/lounge/images/2/2023/3/30/1680153301_64251ad56588d.jpeg",
  //     },
  //     {
  //       id: 320,
  //       post_id: 2149,
  //       url: "https://loungest.blob.core.windows.net/lounge/images/2/2023/3/30/1680153353_64251b09cd64f.jpeg",
  //       url_180:
  //         "https://loungest.blob.core.windows.net/lounge/images/2/2023/3/30/1680153353_64251b09e3129.jpeg",
  //       url_340:
  //         "https://loungest.blob.core.windows.net/lounge/images/2/2023/3/30/1680153353_64251b09ebeff.jpeg",
  //       url_720:
  //         "https://loungest.blob.core.windows.net/lounge/images/2/2023/3/30/1680153353_64251b09eeaf6.jpeg",
  //       url_1024:
  //         "https://loungest.blob.core.windows.net/lounge/images/2/2023/3/30/1680153353_64251b09f2f4d.jpeg",
  //     },
  //   ],
  //   videos: [],
  // };

  return (
    <div className="post_container">
      <div className="board_row">
        <div className="post_user_profile">
          <img
            src={
              data.user?.profile_image?.url_180 ||
              data.user?.profile_image?.url ||
              Deafult_Avatar_Image
            }
            alt="프로필 이미지"
          />
          <div>
            {data.user ? (
              <p> {data.user?.name} </p>
            ) : (
              <p style={{ color: "rgb(175, 184, 195)" }}>
                삭제된 사용자 입니다.
              </p>
            )}
            <span data-v-0e1f7c79 className="post_chip">
              chua biet
            </span>
          </div>
        </div>
      </div>

      {data.images && (
        <div style={{ display: "inline-block", maxWidth: "100%" }}>
          <div className="post_img">
            {data.images.map((i: any) => (
              <img
                src={i.url_340 || i.url_720 || i.url}
                alt="이미지"
                key={Math.random()}
              />
            ))}
          </div>
        </div>
      )}

      <div className="board_row">
        <div
          className="post_content"
          style={{
            maxHeight: "72px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <p>{data.content}</p>
        </div>
      </div>

      <div className="board_row">
        <div className="post_info">
          <div>
            <img src={eye_icon} alt="조회수" />
            <span id="postInterestViewCount">37</span>
          </div>
          <div>
            <img src={star_icon} alt="찜하기" />
            <span id="postInterestBookmarkCount">1</span>
          </div>
          <span className="post_time">4일 전</span>
        </div>
      </div>

      <div className="board_row">
        <div className="post_activity">
          <Reaction />
          <button className="post_comment_btn">
            <img src={comment_icon} alt="댓글" />
            <span> 1 </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
