import { get_all_categories } from "@/services/community";
import "./index.scss";
import { useEffect, useState } from "react";
import { Radio } from "antd";
import filter_icon from "@/assets/icons/filter.svg";

function Categories() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "가족이야기",
    },
    {
      id: 2,
      name: "물물교환",
    },
    {
      id: 3,
      name: "결혼생활",
    },
    {
      id: 4,
      name: "임신·출산",
    },
    {
      id: 6,
      name: "연애",
    },
    {
      id: 7,
      name: "일상·생각",
    },
    {
      id: 8,
      name: "취미생활",
    },
    {
      id: 9,
      name: "레시피공유",
    },
    {
      id: 10,
      name: "반려동물",
    },
  ]);

  useEffect(() => {
    get_all_categories();
  }, []);

  return (
    <div className="categories_section">
      <button className="filter_adjustment">
        <img src={filter_icon} alt="filter icon" />
      </button>

      <Radio.Group defaultValue={0} className="filter_categories_list">
        <Radio.Button value={0}>연애</Radio.Button>
        {categories.map((i) => (
          <Radio.Button value={i.id}>{i.name}</Radio.Button>
        ))}
      </Radio.Group>
      {/*   <div className="filter_categories_list">
        {categories.map((i) => (
          <div>{i.name}</div>
        ))}
      </div> */}
    </div>
  );
}

export default Categories;
