import Header from "@/components/header";
import "./index.scss";
import PostList from "@/components/post-list";
import { useEffect, useState } from "react";
import { getMyInfo, get_myposts, get_pickposts } from "@/services/community";
import { useQuery } from "@tanstack/react-query";
import Modal from "@/components/modal";
import more_action_icon from "@/assets/icons/more_action.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mineOrPick, setMineOrPick] = useState(0);
  const [postResponse, setPostResponse] = useState<any>(null);
  const [page, setPage] = useState(1);

  const [isShowMoreModal, setIsShowMoreModal] = useState(false);

  useEffect(() => {
    async function getData() {
      if (mineOrPick) {
        const res = await get_pickposts(page);
        if (res.data.success) {
          setPostResponse(res.data.pickedPosts);
        }
      } else {
        const res = await get_myposts(page);
        if (res.data.success) {
          setPostResponse(res.data.posts);
        }
      }
    }

    getData();
  }, [mineOrPick, page]);

  const selectionOptions = [
    { text: "내가 쓴 글", id: 0 },
    { text: "찜한 글", id: 1 },
  ];

  const { data: myInfo } = useQuery({
    queryKey: ["myInfo"],
    queryFn: () => getMyInfo().then((res) => res.data.user),
  });

  return (
    <div className="profile_page wrap">
      <Header>
        <button onClick={() => setIsShowMoreModal(true)}>
          <img src={more_action_icon} alt="profile icon" />
        </button>
      </Header>

      {isShowMoreModal && (
        <MoreModal onClose={() => setIsShowMoreModal(false)} />
      )}
      <main style={{ background: "rgb(249, 250, 251)" }}>
        <section className="profile_wrap">
          <div className="profile_container">
            <div className="profile_img">
              <img src={myInfo?.profile_image?.url_180} alt="프로필 이미지" />
            </div>
            <div
              className="profile_info"
              onClick={() => navigate("/edit-profile" + location.search)}
            >
              <p>{myInfo?.name}</p>
              <button>내 정보 수정</button>
            </div>
          </div>
        </section>
        <section>
          <div className="board_row">
            <ul className="select_post_container">
              {selectionOptions.map((option) => {
                const key = `mypost-pickpost-${option.id}`;

                return (
                  <li
                    key={key}
                    onClick={() => {
                      setMineOrPick(option.id);
                      setPage(1);
                    }}
                  >
                    <input
                      type="radio"
                      name="Mypost and wishlist group"
                      id={key}
                      checked={mineOrPick == option.id}
                    />
                    <label htmlFor={key}>{option.text}</label>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <PostList
          data={postResponse?.data}
          getData={() => setPage((page) => page + 1)}
          isLastPage={postResponse?.current_page === postResponse?.last_page}
        />
      </main>
    </div>
  );
}

function MoreModal({ onClose }: any) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Modal
      modalBox={
        <div className="modal_box more_modal_box">
          <ul>
            <li onClick={() => navigate("/blocked-user" + location.search)}>
              차단된 사용자
            </li>
            <li onClick={() => onClose()}>취소</li>
          </ul>
        </div>
      }
    />
  );
}

export default Profile;
