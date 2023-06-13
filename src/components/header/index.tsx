import { PropsWithChildren } from "@/types/prop-with-children.type";
import "./index.scss";
import goBackIcon from "@/assets/icons/goBack.svg";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  title?: any;
  env?: string;
};

function Header(props: PropsWithChildren<HeaderProps>) {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "lightgrey",
          }}
        >
          Dev
        </span>
        <div className="header_title">
          <button className="back_btn" onClick={() => navigate(-1)}>
            <img src={goBackIcon} alt="뒤로가기" />
          </button>
          <h2>{props.title || "커뮤니티"}</h2>
        </div>
        <div className="header_activity">
          {props.children}
          {/* <button className="header_activity_bookmark active_picked" />
          <button>
            <img src="/img/24_dots_vertical.41629782.svg" alt="더보기" />
          </button> */}
        </div>
      </header>

      {/*   <div className="layout">
        <div className="title">{props.title || "Community"}</div>
        <div>{props.env || "Dev"}</div>
        <div>{props.children}</div>
      </div> */}
    </>
  );
}

export default Header;
