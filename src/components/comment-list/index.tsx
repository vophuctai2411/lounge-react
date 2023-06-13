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

  useQuery({
    queryKey: ["comments_Query", postID],
    queryFn: () =>
      getCommentsByPostID(postID).then((response) => response.data.comments),
    onSuccess: (data) => {
      dispatch(saveComments(data));
    },
  });

  return (
    <>
      <ul className="comment_order">
        <li>
          <input
            type="radio"
            id="earliest"
            defaultValue="earliest"
            name="comment_oder_group"
          />
          <label htmlFor="earliest">등록순</label>
        </li>
        <li>
          <input
            type="radio"
            id="popular"
            defaultValue="popular"
            name="comment_oder_group"
          />
          <label htmlFor="popular">인기순</label>
        </li>
        <li>
          <input
            type="radio"
            id="latest"
            defaultValue="latest"
            name="comment_oder_group"
          />
          <label htmlFor="latest">최신순</label>
        </li>
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
