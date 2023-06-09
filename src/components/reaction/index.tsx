import "./index.scss";
import like_icon from "@/assets/icons/like.svg";
import dislike_icon from "@/assets/icons/dislike.svg";
import like_active_icon from "@/assets/icons/like_active.svg";
import dislike_active_icon from "@/assets/icons/dislike_active.svg";
import { useState } from "react";

function Reaction() {
  const [activeButton, setActiveButton] = useState(-1);

  return (
    <>
      <button
        className={
          activeButton == 1
            ? "thumb_btn active_post active_pressed"
            : "thumb_btn active_post"
        }
        onClick={() => {
          setActiveButton(1);
        }}
      >
        <img
          src={activeButton == 1 ? like_active_icon : like_icon}
          className="thumb_img"
        />

        <span className="thumb_text">
          {activeButton == 1 ? 100000 : "좋아요"}
        </span>
      </button>

      <button
        className={
          activeButton == 2
            ? "thumb_btn active_post active_pressed"
            : "thumb_btn active_post"
        }
        onClick={() => {
          setActiveButton(2);
        }}
      >
        <img
          src={activeButton == 2 ? dislike_active_icon : dislike_icon}
          className="thumb_img"
        />
        <span className="thumb_text">
          {activeButton == 2 ? 100000 : "싫어요"}
        </span>
      </button>
    </>
  );
}

export default Reaction;
