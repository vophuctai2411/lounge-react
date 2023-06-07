import "./index.scss";
import Comment from "@/components/comment";
import { Radio } from "antd";
import { useState } from "react";

function CommentList() {
  const [comments, setComments] = useState([
    {
      id: 15058,
      content:
        "<img src='https://loungest.blob.core.windows.net/lounge/images/3/2023/2/17/1676619480_63ef2ed87eb22.gif' style='width:50px; height:50px; display:block;'>",
      parent_comment_id: null,
      post_id: 2121,
      board_id: 1,
      user_id: 14,
      created_at: "2023-02-22 15:52:08",
      updated_at: "2023-02-22 15:52:08",
      deleted_at: null,
      user: {
        id: 14,
        name: "universe000",
        level: 1,
        profile_image: {
          id: 295,
          user_id: 14,
          url: "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262601_640841499ba35.jpeg",
          url_180:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414a8c51a.jpeg",
          url_340:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414aa8285.jpeg",
          url_720:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414ac78ff.jpeg",
          url_1024:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414aea311.jpeg",
        },
        media: null,
      },
      is_auth_user_liked: false,
      is_auth_user_disliked: false,
      emotion: {
        like: 0,
        dislike: 0,
      },
      children: [],
    },
    {
      id: 15059,
      content: "\ub313\uae00\uc785\u3134\ub514",
      parent_comment_id: null,
      post_id: 2121,
      board_id: 1,
      user_id: 14,
      created_at: "2023-02-22 15:52:17",
      updated_at: "2023-02-22 15:52:17",
      deleted_at: null,
      user: {
        id: 14,
        name: "universe000",
        level: 1,
        profile_image: {
          id: 295,
          user_id: 14,
          url: "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262601_640841499ba35.jpeg",
          url_180:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414a8c51a.jpeg",
          url_340:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414aa8285.jpeg",
          url_720:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414ac78ff.jpeg",
          url_1024:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414aea311.jpeg",
        },
        media: null,
      },
      is_auth_user_liked: false,
      is_auth_user_disliked: false,
      emotion: {
        like: 0,
        dislike: 0,
      },
      children: [
        {
          id: 15060,
          content:
            "<img src='https://loungest.blob.core.windows.net/lounge/images/3/2023/2/22/1677028380_63f56c1cd3d1c.png' style='width:50px; height:50px; display:block;'>",
          parent_comment_id: 15059,
          post_id: 2121,
          board_id: 1,
          user_id: 14,
          created_at: "2023-02-22 15:52:33",
          updated_at: "2023-02-22 15:52:33",
          deleted_at: null,
          user: {
            id: 14,
            name: "universe000",
            level: 1,
            profile_image: {
              id: 295,
              user_id: 14,
              url: "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262601_640841499ba35.jpeg",
              url_180:
                "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414a8c51a.jpeg",
              url_340:
                "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414aa8285.jpeg",
              url_720:
                "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414ac78ff.jpeg",
              url_1024:
                "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414aea311.jpeg",
            },
            media: null,
          },
          is_auth_user_liked: false,
          is_auth_user_disliked: false,
          emotion: {
            like: 0,
            dislike: 0,
          },
        },
      ],
    },
    {
      id: 15061,
      content: "\ub2f5\uae00\uc791\uc131\uc911",
      parent_comment_id: null,
      post_id: 2121,
      board_id: 1,
      user_id: 14,
      created_at: "2023-02-22 15:52:38",
      updated_at: "2023-02-22 15:52:55",
      deleted_at: "2023-02-22 15:52:55",
      user: {
        id: 14,
        name: "universe000",
        level: 1,
        profile_image: {
          id: 295,
          user_id: 14,
          url: "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262601_640841499ba35.jpeg",
          url_180:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414a8c51a.jpeg",
          url_340:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414aa8285.jpeg",
          url_720:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414ac78ff.jpeg",
          url_1024:
            "https://loungest.blob.core.windows.net/lounge/images/1/2023/3/8/1678262602_6408414aea311.jpeg",
        },
        media: null,
      },
      is_auth_user_liked: false,
      is_auth_user_disliked: false,
      emotion: {
        like: 0,
        dislike: 0,
      },
      children: [],
    },
  ]);

  return (
    <>
      <Radio.Group defaultValue="a" size="small" style={{ marginTop: 16 }}>
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>

      <div className="comment_content">
        <Comment />
      </div>
    </>
  );
}

export default CommentList;
