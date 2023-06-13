import Header from "@/components/header";
import "./index.scss";
import writer_select_category from "@/assets/icons/writer_select_category.svg";
import writer_warning_mark from "@/assets/icons/writer_warning_mark.svg";
import writer_close_warning from "@/assets/icons/writer_close_warning.svg";
import writer_close_image from "@/assets/icons/writer_close_image.svg";
import writer_upload_image from "@/assets/icons/writer_upload_image.svg";
import { useRef, useState } from "react";
import Modal from "@/components/modal";

function PostWriter() {
  const multipleImageRef = useRef<HTMLInputElement>(null);

  const [postImages, setPostImages] = useState<any[]>([]);
  const openFileDialog = () => {
    // if (this.postData.postImages.length >= 10) {
    //   alert("이미지는 최대 10장까지 첨부 가능합니다.");
    //   return;
    // }
    multipleImageRef.current?.click();
  };

  const [];

  const handleFileSelect = (e: any) => {
    const fileArray = e.target.files;

    // let input = this.$refs.fileInput;
    // if (this.postData.postImages.length + input?.files?.length > 10) {
    //   alert("이미지는 최대 10장까지 첨부 가능합니다.");
    //   return;
    // }

    let chosenImages = [];
    for (let i = 0; i < fileArray.length; i++) {
      let file = fileArray[i];
      chosenImages.push({
        file: file,
        url: URL.createObjectURL(file),
        size: (file.size / (1024 * 1024)).toFixed(2),
      });
    }
    setPostImages(chosenImages);
  };

  const removeAFile = (index: number) => {
    // if (!this.postData.postImages[index].file) {
    //   this.postData.removedImageIds.push(this.postData.postImages[index].id);
    // }
    // this.postData.postImages.splice(index, 1);
    const newArr = postImages.filter((i, ind) => ind !== index);

    setPostImages(newArr);
  };

  return (
    <div className="wrap post-writer-container">
      <Header />
      <button className="select_category">
        <span>가족이야기</span>
        <img src={writer_select_category} alt="icon select category" />
      </button>
      <PrivacyModal />
      <main>
        <section className="write_post_wrap">
          <div>
            <div className="write_post_container">
              <Warning />
              <div className="write_post_img">
                {postImages.map((img, index) => (
                  <div key={`images-list-${index}`}>
                    <img src={img.url} />
                    <button onClick={() => removeAFile(index)}>
                      <img src={writer_close_image} alt="writer close image" />
                    </button>
                    <span>{img.size}MB</span>
                  </div>
                ))}
              </div>
              <div className="board_row">
                <div className="write_post_content" style={{ height: "50vh" }}>
                  <textarea
                    placeholder="눈팅러의 이야기를 들려주세요."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div>
              <input
                type="file"
                ref={multipleImageRef}
                style={{ display: "none" }}
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => handleFileSelect(e)}
                multiple
              />
            </div>
            <button
              className="write_post_footer"
              onClick={() => openFileDialog()}
            >
              <img src={writer_upload_image} alt="upload image" />
              <p>
                {postImages.length}/10
                <span> (0.00MB (CHUA TINH) / 100MB) </span>
              </p>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function Warning() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow && (
        <div className="board_row">
          <div className="write_post_warning">
            <p className="write_post_warning_title">
              <img src={writer_warning_mark} alt="writer warning mark" />글 작성
              주의사항
              <button onClick={() => setIsShow(false)}>
                <img src={writer_close_warning} alt="writer close warning" />
              </button>
            </p>
            <p className="write_post_warning_content">
              눈팅 앱에서 규정한 운영규칙 위반 내용의 게시물 작성 시 커뮤니티
              이용에 제한이 생길 수 있습니다.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function PrivacyModal() {
  return (
    <Modal
      modalBox={
        <div className="modal_box set_privacy_modal_box">
          <ul>
            <li>
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>나만보기</div>
              </div>
            </li>
            <li>
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>전체보기</div>
              </div>
            </li>
            <li>
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>취소</div>
              </div>
            </li>
          </ul>
        </div>
      }
    />
  );
}

export default PostWriter;
