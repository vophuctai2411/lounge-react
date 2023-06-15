import "./index.scss";
import eye_icon from "@/assets/icons/eye.svg";
import comment_icon from "@/assets/icons/comment.svg";
import star_icon from "@/assets/icons/star.svg";
import Reaction from "@/components/reaction";
import { PostType } from "@/types/components.type";
import Deafult_Avatar_Image from "@/assets/images/deafault_avatar.svg";
import { useQuery } from "@tanstack/react-query";
import { get_all_categories } from "@/services/community";
import { elapsedTime } from "@/utils/utils";
import { useNavigate, useLocation } from "react-router-dom";

function Post({ data }: PostType) {
  const isEdit = true;
  const navigate = useNavigate();
  const location = useLocation();

  const { data: allCategories } = useQuery({
    queryKey: ["categories_Query"],
    queryFn: () =>
      get_all_categories().then((response) => response.data.postCategories),
    staleTime: 10000,
  });

  const postChip = allCategories?.filter(
    (cate: any) => cate.id == data.post_category_id
  )[0]?.name;

  const directToDetailPage = (id: number) => {
    navigate("/detail/" + id + location.search);
  };

  return (
    <div className="post_container">
      <div className="board_row" onClick={() => directToDetailPage(data.id)}>
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
            <span className="post_chip">{postChip}</span>
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
          <span
            dangerouslySetInnerHTML={{
              __html:
                data.content.length > 90 && !isEdit
                  ? data.content.substring(0, 90)
                  : data.content,
            }}
          />

          {data.content.length > 90 && !isEdit && (
            <span className="content_more_btn">
              ... <b>더 보기</b>
            </span>
          )}
        </div>
      </div>

      <div className="board_row">
        <div className="post_info">
          <div>
            <img src={eye_icon} alt="조회수" />
            <span id="postInterestViewCount">{data.view_count}</span>
          </div>
          <div>
            <img src={star_icon} alt="찜하기" />
            <span id="postInterestBookmarkCount">{data.picker_count}</span>
          </div>
          <span className="post_time">{elapsedTime(data.created_at)}</span>
        </div>
      </div>

      <div className="board_row">
        <div className="post_activity">
          <Reaction
            like={data.emotion?.like}
            dislike={data.emotion?.dislike}
            isAuthorLike={data.is_auth_user_liked}
            isAuthorDislike={data.is_auth_user_disliked}
            postID={data.id}
          />
          <button className="post_comment_btn">
            <img src={comment_icon} alt="댓글" />
            <span> {data.comments_count || "댓글달기"} </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
