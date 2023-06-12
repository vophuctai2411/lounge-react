import "./index.scss";
import Comment from "@/components/comment";
import { useQuery } from "@tanstack/react-query";
import { getCommentsByPostID } from "@/services/community";

function CommentList({ postID, setParentID }: any) {
  const { data: comments } = useQuery({
    queryKey: ["comments_Query", postID],
    queryFn: () =>
      getCommentsByPostID(postID).then((response) => response.data.comments),
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
                {cmt.children.length > 0 &&
                  cmt.children.map((child: any) => (
                    <Comment
                      isReply={true}
                      data={child}
                      key={`subcmtKey-${child.id}`}
                    />
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CommentList;
