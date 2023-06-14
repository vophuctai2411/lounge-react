import "./index.scss";
import more_action_icon from "@/assets/icons/more_action.svg";
import deleted_comment_icon from "@/assets/icons/deleted_comment.svg";
import Reaction from "../reaction";
import default_avatar from "@/assets/images/deafault_avatar.svg";

function Comment({ data, isReply, setParentID }: any) {
  return (
    <div className={isReply ? "child_comment" : ""}>
      {data.deleted_at ? (
        <div className="deleted_comment deleted_reply">
          <img src={deleted_comment_icon} alt="알림" /> 댓글 작성자가 댓글을
          삭제했어요.
        </div>
      ) : (
        <div className="new_comment">
          <div className="comment_user_img">
            <img
              src={data?.user?.profile_image?.url_340 || default_avatar}
              alt="프로필 이미지"
            />
          </div>
          <div className="comment_right">
            <div className="comment_info">
              <p>
                {data.user.name}
                <span
                  className="writer_chip"
                  style={{
                    backgroundColor: "rgb(255, 151, 213)",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  작성자 data fake
                </span>
                <span className="comment_time">4일 전</span>
              </p>
              <button>
                <img src={more_action_icon} alt="more action icon" />
              </button>
            </div>
            <div
              className="comment_text"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
            <div className="comment_activity">
              <Reaction
                like={data.emotion.like}
                dislike={data.emotion.dislike}
                isAuthorLike={data.is_auth_user_liked}
                isAuthorDislike={data.is_auth_user_disliked}
                postID={data.post_id}
                commentID={data.id}
              />
              {!isReply && (
                <button
                  className="comment_replay"
                  onClick={() => setParentID(data.id)}
                >
                  답글 1
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;
