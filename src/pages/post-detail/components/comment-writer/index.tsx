import "./index.scss";
import smiley_icon from "@/assets/icons/smiley.svg";
import send_icon from "@/assets/icons/send.svg";

function CommentWriter() {
  return (
    <div data-v-efd7a560 className="comment_write">
      <div data-v-efd7a560>
        <textarea placeholder="댓글을 입력해주세요." defaultValue={""} />
        <button className="emoticon_btn">
          <img src={smiley_icon} alt="smiley icon" />
        </button>
        <button>
          <img src={send_icon} alt="send icon" />
        </button>
      </div>
    </div>
  );
}

export default CommentWriter;
