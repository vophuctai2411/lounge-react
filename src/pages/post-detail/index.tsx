import Header from "@/components/header";
import "./index.scss";
import CommentList from "@/components/comment-list";
import CommentWriter from "./components/comment-writer";
import Post from "@/components/post";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  blockUser,
  getMyInfo,
  getPostByID,
  pickOrUnpickPost,
} from "@/services/community";
import { useEffect, useState } from "react";
import header_bookmark_off_icon from "@/assets/icons/header_activity_bookmark_off.svg";
import header_bookmark_on_icon from "@/assets/icons/header_activity_bookmark_on.svg";
import more_action_icon from "@/assets/icons/more_action.svg";
import Modal from "@/components/modal";

function PostDetail() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["postDetail_Query", id],
    queryFn: () => getPostByID(id).then((response) => response.data?.post),
    staleTime: Infinity,
  });

  const [parentID, setParentID] = useState(null);
  const [isShowMoreModal, setIsShowMoreModal] = useState(false);

  const { data: myInfo } = useQuery({
    queryKey: ["myInfo"],
    queryFn: () => getMyInfo().then((res) => res.data.user),
  });

  const [isPostPick, setIsPostPick] = useState<any>();

  useEffect(() => {
    setIsPostPick(data?.is_auth_user_picked);
  }, [data]);

  async function changePickStt() {
    const res = await pickOrUnpickPost(data.id);

    if (res.data.success) setIsPostPick((preStt: any) => !preStt);
  }

  return (
    <div className="wrap">
      <Header>
        <>
          <button onClick={() => changePickStt()}>
            <img
              src={
                isPostPick ? header_bookmark_on_icon : header_bookmark_off_icon
              }
              alt="search icon"
            />
          </button>
          <button onClick={() => setIsShowMoreModal(true)}>
            <img src={more_action_icon} alt="profile icon" />
          </button>
        </>
      </Header>

      {isShowMoreModal && (
        <>
          {data.user_id == myInfo.id ? (
            <MyPostMoreModal onClose={() => setIsShowMoreModal(false)} />
          ) : (
            <OtherPersonPostMoreModal
              onClose={() => setIsShowMoreModal(false)}
              postUserID={data?.user_id}
            />
          )}
        </>
      )}

      <main style={{ backgroundColor: "rgb(249, 250, 251)" }}>
        <div className="post_wrap">{data && <Post data={data} />}</div>

        <div className="comment_wrap">
          <div className="comment_container">
            <CommentList postID={data?.id} setParentID={setParentID} />
          </div>
          <div className="comment_action">
            <CommentWriter postID={data?.id} parentID={parentID} />
          </div>
        </div>
      </main>
    </div>
  );
}

function MyPostMoreModal({ onClose }: any) {
  return (
    <Modal
      modalBox={
        <div className="modal_box more_modal_box">
          <ul>
            <li>수정</li>
            <li>삭제</li>
            <li onClick={() => onClose()}>취소</li>
          </ul>
        </div>
      }
    />
  );
}

function OtherPersonPostMoreModal({ onClose, postUserID }: any) {
  const navigate = useNavigate();
  const location = useLocation();

  async function block() {
    const res = await blockUser(postUserID);
    if (res.data.success) navigate("/board" + location.search);

    onClose();
  }

  return (
    <Modal
      modalBox={
        <div className="modal_box more_modal_box">
          <ul>
            <li>신고</li>
            <li onClick={() => block()}>이 사용자의 글 보지 않기</li>
            <li onClick={() => onClose()}>취소</li>
          </ul>
        </div>
      }
    />
  );
}

export default PostDetail;
