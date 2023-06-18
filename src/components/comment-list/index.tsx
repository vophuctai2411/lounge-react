import "./index.scss";
import Comment from "@/components/comment";
import { useQuery } from "@tanstack/react-query";
import { getCommentsByPostID } from "@/services/community";
import { useDispatch, useSelector } from "react-redux";
import { saveComments } from "@/slices/commentsSlice";
import { RootState } from "@/store";
import arrow_down_icon from "@/assets/icons/arrow_down.svg";
import comment_reply_more_icon from "@/assets/icons/comment_reply_more.svg";
import { useState } from "react";

function CommentList({ postID, setParentID }: any) {
  const dispatch = useDispatch();

  let comments = useSelector((state: RootState) => state.comments);

  const { refetch } = useQuery({
    queryKey: ["comments_Query", postID],
    queryFn: () =>
      getCommentsByPostID(postID).then((response) => response.data.comments),
    onSuccess: (data) => {
      dispatch(saveComments(data));
    },
    enabled: comments.length == 0 || comments[0]?.post_id !== postID,
  });

  const listTagOder = [
    { key: "earliest", name: "등록순" },
    { key: "popular", name: "인기순" },
    { key: "latest", name: "최신순" },
  ];

  const [key, setKey] = useState("earliest");

  function selectedOrder(comments: any[]) {
    const newCommentItems = comments?.slice().sort((a: any, b: any): any => {
      if (key === "latest") {
        return b.id - a.id || b.emotion.like - a.emotion.like;
      } else if (key === "popular") {
        return (
          b.emotion.like - a.emotion.like ||
          a.emotion.dislike - b.emotion.dislike ||
          a.id - b.id
        );
      } else if (key === "earliest") {
        return a.id - b.id || b.emotion.like - a.emotion.like;
      }
    });

    return newCommentItems;
  }

  //apply filter before reder
  comments = selectedOrder(comments);

  return (
    <>
      <ul className="comment_order">
        {listTagOder.map((i) => (
          <li
            key={i.key}
            onClick={() => {
              setKey(i.key);
              refetch();
            }}
          >
            <input
              type="radio"
              id={i.key}
              name="comment_oder_group"
              checked={i.key == key}
              onChange={() => {}}
            />
            <label htmlFor={i.key}>{i.name}</label>
          </li>
        ))}
      </ul>

      <div className="comment_content">
        <ul>
          {comments?.map((cmt: any) => (
            <li key={`commentKey-${cmt.id}`}>
              <Comment data={cmt} setParentID={setParentID} />
              <ul>
                {cmt.children.length > 0 && (
                  <ReplyCommentList data={cmt.children} />
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function ReplyCommentList({ data }: any) {
  const [isShowAll, setIsShowAll] = useState(false);

  let showArr = data;
  if (!isShowAll) showArr = data.slice(0, 2);

  return (
    <>
      {showArr.map((child: any) => (
        <Comment isReply={true} data={child} key={`subcmtKey-${child.id}`} />
      ))}
      {data.length >= 3 && !isShowAll && (
        <li>
          <button
            className="see_more_reply_btn"
            onClick={() => setIsShowAll(true)}
          >
            <img src={comment_reply_more_icon} alt="답글 더보기" />
            답글 {data.length - 2}개 더보기
            <img src={arrow_down_icon} alt="화살표" />
          </button>
        </li>
      )}
    </>
  );
}

export default CommentList;
