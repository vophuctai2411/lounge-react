import "./index.scss";
import more_action_icon from "@/assets/icons/more_action.svg";
import deleted_comment_icon from "@/assets/icons/deleted_comment.svg";
import Reaction from "../reaction";
import default_avatar from "@/assets/images/deafault_avatar.svg";
import Modal from "../modal";
import { useQuery } from "@tanstack/react-query";
import { getMyInfo, deleteComment } from "@/services/community";
import { useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function Comment({ data, isReply, setParentID }: any) {
  //my comment - text - sua xoa
  // my comment - icon - xoa
  //other person comment - report

  //my post - edit, delete
  //other post - report, block

  const { data: myInfo } = useQuery({
    queryKey: ["myInfo"],
    queryFn: () => getMyInfo().then((res) => res.data.user),
    staleTime: Infinity,
  });

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);

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
              <button onClick={() => setIsShowModal(true)}>
                <img src={more_action_icon} alt="more action icon" />
              </button>
              {isShowModal && (
                <>
                  {myInfo.id == data.user.id ? (
                    <MyCommentModal
                      isIcon={data.content.includes("<img")}
                      onClose={() => setIsShowModal(false)}
                      openConfirm={() => setIsShowConfirmModal(true)}
                      cmtID={data.id}
                    />
                  ) : (
                    <OtherCommentModal
                      onClose={() => setIsShowModal(false)}
                      data={data}
                    />
                  )}
                </>
              )}

              {isShowConfirmModal && (
                <ConfirmModal
                  postID={data.post_id}
                  cmtID={data.id}
                  onClose={() => setIsShowConfirmModal(false)}
                />
              )}
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

function MyCommentModal({ isIcon, onClose, openConfirm, cmtID }: any) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Modal
      modalBox={
        <div className="modal_box more_modal_box">
          <ul>
            {!isIcon && (
              <li
                onClick={() =>
                  navigate("/edit-comment/" + cmtID + location.search)
                }
              >
                수정
              </li>
            )}
            <li
              onClick={() => {
                openConfirm();
                onClose();
              }}
            >
              삭제
            </li>
            <li onClick={() => onClose()}>취소</li>
          </ul>
        </div>
      }
    />
  );
}

function ConfirmModal({ postID, cmtID, onClose }: any) {
  async function remove() {
    await deleteComment(postID, cmtID);

    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
        },
      },
    });

    await queryClient.refetchQueries({
      queryKey: ["comments_Query", postID],
      type: "active",
      exact: true,
    });

    onClose();
  }

  return (
    <Modal
      content={
        <div className="modal_des_box">
          <p>차단된 사용자를 해제하시겠습니까?</p>
        </div>
      }
      footer={
        <>
          <button className="acceptButton" onClick={() => remove()}>
            확인
          </button>
          <button className="cancelButton" onClick={() => onClose()}>
            취소
          </button>
        </>
      }
    />
  );
}

function OtherCommentModal({ onClose, data }: any) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const Authorization = searchParams.get("Authorization");

  const params: any = {
    type: 3,
    reportedUserId: data.user.id,
    boardId: 1,
    postId: data.post_id,
    commentId: data.id,
    userId,
    Authorization,
  };

  return (
    <Modal
      modalBox={
        <div className="modal_box more_modal_box">
          <ul>
            <li
              onClick={() => {
                navigate({
                  pathname: "/report",
                  search: `?${createSearchParams(params)}`,
                });
              }}
            >
              신고
            </li>
            <li onClick={() => onClose()}>취소</li>
          </ul>
        </div>
      }
    />
  );
}

export default Comment;
