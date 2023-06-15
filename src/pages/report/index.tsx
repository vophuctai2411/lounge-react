import "./index.scss";
import Header from "@/components/header";

function Report() {
  const reportType = [
    {
      id: "wrongInfo",
      value: "잘못된 정보",
    },
    {
      id: "unrelated",
      value: "관계없는 내용",
    },
    {
      id: "adult",
      value: "음란물/외설적 내용",
    },
    {
      id: "swearing",
      value: "욕설/비방 표현",
    },
    {
      id: "copyright",
      value: "저작권 침해",
    },
    {
      id: "etc",
      value: "기타",
    },
  ];

  return (
    <div className="wrap">
      <Header title="신고하기">
        <button className="header_activity_right_btn">신고</button>
      </Header>
      <main>
        <section className="report_wrap">
          <div className="report_container">
            <h3>신고사유</h3>
            <ul>
              <li>
                <input type="radio" id="wrongInfo" defaultValue="잘못된 정보" />
                <span />
                <label htmlFor="wrongInfo">잘못된 정보</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="unrelated"
                  defaultValue="관계없는 내용"
                />
                <span />
                <label htmlFor="unrelated">관계없는 내용</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="adult"
                  defaultValue="음란물/외설적 내용"
                />
                <span />
                <label htmlFor="adult">음란물/외설적 내용</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="swearing"
                  defaultValue="욕설/비방 표현"
                />
                <span />
                <label htmlFor="swearing">욕설/비방 표현</label>
              </li>
              <li>
                <input type="radio" id="copyright" defaultValue="저작권 침해" />
                <span />
                <label htmlFor="copyright">저작권 침해</label>
              </li>
              <li>
                <input type="radio" id="etc" defaultValue="기타" />
                <span />
                <label htmlFor="etc">기타</label>
              </li>
              <li>
                <textarea
                  placeholder="신고사유를 입력해 주세요."
                  defaultValue={""}
                />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Report;
