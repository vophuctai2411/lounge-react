import "./index.scss";
import smiley_icon from "@/assets/icons/smiley.svg";
import send_icon from "@/assets/icons/send.svg";
import close_white_icon from "@/assets/icons/close_white.svg";
import {
  commentOnPost,
  getAllEmoticonPackages,
  get_All_Emoicon_By_PackageID,
  commentIconOnPost,
  getCommentsByPostID,
} from "@/services/community";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { saveComments } from "@/slices/commentsSlice";
import { useDispatch } from "react-redux";

function CommentWriter({ postID, parentID }: any) {
  const [textValue, setTextValue] = useState("");
  const [isShowIconModal, setIsShowIconModal] = useState(false);
  const [selectedPackgeID, setSelectedPackageID] = useState();
  const [chosenIcon, setChosenIcon] = useState();
  const dispatch = useDispatch();

  const sendMessage = async () => {
    let response;
    if (chosenIcon !== undefined) {
      const payload = {
        emoticonId: chosenIcon?.id,
        ...(parentID && { parentCommentId: parentID }),
        size: 100,
      };
      response = await commentIconOnPost(postID, payload);
    } else {
      const payload = {
        content: textValue,
        ...(parentID && { parentCommentId: parentID }),
      };
      response = await commentOnPost(postID, payload);
    }

    if (response?.data?.success) {
      setTextValue("");
      setIsShowIconModal(false);
      setChosenIcon(undefined);

      getCommentsByPostID(postID).then((response) => {
        const comments = response.data.comments;
        dispatch(saveComments(comments));
      });
    }
  };

  const { data: iconPackages } = useQuery({
    queryKey: ["iconPackages_Query"],
    queryFn: () =>
      getAllEmoticonPackages().then(
        (response: any) => response.data?.emoticonPackages?.data
      ),
    onSuccess: (data) => {
      setSelectedPackageID(data[0].id);
    },
    staleTime: Infinity,
  });

  const { data: showIcons } = useQuery({
    queryKey: ["iconsByPackgeID_Query", selectedPackgeID],
    queryFn: () =>
      get_All_Emoicon_By_PackageID(selectedPackgeID).then(
        (response: any) => response.data?.emoticonPackage?.emoticons
      ),
    staleTime: Infinity,
  });

  return (
    <>
      <div className="comment_write">
        {isShowIconModal && chosenIcon && (
          <div className="emoticon_preview">
            <button onClick={() => setChosenIcon(undefined)}>
              <img src={close_white_icon} alt="닫기" />
            </button>
            <img src={chosenIcon?.url_340} alt="이모티콘" />
          </div>
        )}
        <div>
          <textarea
            //type="text"
            placeholder="이모티콘 보내기"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            onFocus={() => {
              // setIsShowIconModal(false);
              //setChosenIcon(undefined);
            }}
          />
          {!textValue && (
            <button onClick={() => setIsShowIconModal(true)}>
              <img src={smiley_icon} alt="등록" />
            </button>
          )}
          <button onClick={() => sendMessage()}>
            <img src={send_icon} alt="등록" />
          </button>
        </div>
      </div>

      {isShowIconModal && (
        <div className="comment_emoticon">
          <div className="emoticon_filter">
            <ul>
              {iconPackages?.map((iconPackage: any) => (
                <li
                  key={`iconPackages-${iconPackage.id}`}
                  onClick={() => {
                    setSelectedPackageID(iconPackage.id);
                  }}
                  className={iconPackage.id == selectedPackgeID ? "active" : ""}
                >
                  <div>
                    <img src={iconPackage.main_emoticon.url} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="emoticon_container">
            <ul>
              {showIcons?.map((emoicon: any) => (
                <li
                  key={`emoicon-${emoicon.id}`}
                  onClick={() => setChosenIcon(emoicon)}
                >
                  <img src={emoicon.url_340} alt="이모티콘" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default CommentWriter;
