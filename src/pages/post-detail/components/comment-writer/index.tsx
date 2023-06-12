import "./index.scss";
import smiley_icon from "@/assets/icons/smiley.svg";
import send_icon from "@/assets/icons/send.svg";
import close_white_icon from "@/assets/icons/close_white.svg";

function CommentWriter() {
  return (
    <>
      <div className="comment_write">
        <div className="emoticon_preview">
          <button>
            <img src={close_white_icon} alt="닫기" />
          </button>
          <img
            src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695881_640eddc919bb6.gif"
            alt="이모티콘"
          />
        </div>
        <div>
          <textarea
            //type="text"
            placeholder="이모티콘 보내기"
            defaultValue={""}
          />
          <button>
            <img src={smiley_icon} alt="등록" />
          </button>
          <button>
            <img src={send_icon} alt="등록" />
          </button>
        </div>
      </div>

      <div className="comment_emoticon">
        <div className="emoticon_filter">
          <ul>
            <li className="active">
              <div>
                <img src="https://loungest.blob.core.windows.net/lounge/images/4/2023/3/13/1678695861_640eddb59cc14.png" />
              </div>
            </li>
          </ul>
        </div>
        <div className="emoticon_container">
          <ul>
            <li>
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695880_640eddc81de76.gif"
                alt="이모티콘"
              />
            </li>
            <li>
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695880_640eddc8429b1.gif"
                alt="이모티콘"
              />
            </li>
            <li>
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695880_640eddc86da2d.gif"
                alt="이모티콘"
              />
            </li>
            <li>
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695880_640eddc882d2e.gif"
                alt="이모티콘"
              />
            </li>
            <li>
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695880_640eddc899d2a.gif"
                alt="이모티콘"
              />
            </li>
            <li>
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695880_640eddc8be035.gif"
                alt="이모티콘"
              />
            </li>
            <li>
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695880_640eddc8d499c.gif"
                alt="이모티콘"
              />
            </li>
            <li>
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695880_640eddc8ec460.gif"
                alt="이모티콘"
              />
            </li>
            <li>
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695881_640eddc919bb6.gif"
                alt="이모티콘"
              />
            </li>
            <li>
              <img
                src="https://loungest.blob.core.windows.net/lounge/images/3/2023/3/13/1678695881_640eddc92d50e.gif"
                alt="이모티콘"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CommentWriter;
