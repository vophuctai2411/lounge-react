import "./index.scss";
import Header from "@/components/header";
import close_icon from "@/assets/icons/close_grey.svg";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { editComment, getCommentByID } from "@/services/community";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Modal from "@/components/modal";

function EditComment() {
  const [text, setText] = useState<string>();
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
  const { id: commentID } = useParams();

  const { data: comment } = useQuery({
    queryKey: ["Comment", commentID],
    queryFn: () => getCommentByID(commentID).then((res) => res.data.comment),
    staleTime: Infinity,
    onSuccess: (data) => setText(data.content),
  });

  return (
    <div className="wrap">
      <Header title="수정">
        <button
          className="header_activity_right_btn"
          onClick={() => setIsShowConfirmModal(true)}
        >
          완료
        </button>
      </Header>

      {isShowConfirmModal && (
        <ConfirmModal
          onClose={() => setIsShowConfirmModal(false)}
          postID={comment.post_id}
          commentID={comment.id}
          text={text}
        />
      )}

      <main>
        <section className="edit_comment_wrap">
          <div className="edit_comment_container">
            <div>
              <textarea
                placeholder="댓글을 입력해주세요."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={() => setText("")}>
                <img src={close_icon} alt="닫기" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ConfirmModal({ postID, commentID, onClose, text }: any) {
  const navigate = useNavigate();
  const location = useLocation();

  async function edit() {
    if (text?.length > 0) {
      const res = await editComment(postID, commentID, text);
      if (res.data.success) navigate("/detail/" + postID + location.search);

      onClose();
    } else alert("댓글을 입력해주세요.");
  }

  return (
    <Modal
      content={
        <div className="modal_des_box">
          <p>댓글을 수정하시겠습니까?</p>
        </div>
      }
      footer={
        <>
          <button className="acceptButton" onClick={() => edit()}>
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

export default EditComment;
