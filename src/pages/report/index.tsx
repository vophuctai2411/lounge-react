import { useState } from "react";
import "./index.scss";
import Header from "@/components/header";
import { useSearchParams } from "react-router-dom";
import { reportPostAndComment } from "@/services/community";

function Report() {
  const [text, setText] = useState<string>("");
  const [reason, setReason] = useState<string>("");

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

  const [searchParams] = useSearchParams();

  async function report() {
    const res = await reportPostAndComment({
      type: searchParams.get("type"), //1report user 2report post 3report comment
      reportedUserId: searchParams.get("reportedUserId"),
      boardId: searchParams.get("boardId"),
      postId: searchParams.get("postId"),
      commentId: searchParams.get("commentId"),
      reason: reason,
      reasonDetail: text,
    });

    if (res.data.success) window.history.back();
  }

  return (
    <div className="wrap">
      <Header title="신고하기">
        <button className="header_activity_right_btn" onClick={() => report()}>
          신고
        </button>
      </Header>
      <main>
        <section className="report_wrap">
          <div className="report_container">
            <h3>신고사유</h3>
            <ul>
              {reportType.map((report) => (
                <li
                  key={`report-radio-${report.id}`}
                  onClick={() => setReason(report.value)}
                >
                  <input
                    type="radio"
                    id={report.id}
                    defaultValue={report.value}
                    name="report-type-group"
                  />
                  <span />
                  <label htmlFor={report.id}>{report.value}</label>
                </li>
              ))}

              <li>
                <textarea
                  placeholder="신고사유를 입력해 주세요."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
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
