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

      {/* <Radio.Group defaultValue={0} className="filter_categories_list">
        <Radio.Button value={0}>연애</Radio.Button>
        {categories.map((i) => (
          <Radio.Button value={i.id}>{i.name}</Radio.Button>
        ))}
      </Radio.Group> */}

      <ul data-v-62d41194 className="filter_category_list">
        <li data-v-62d41194>
          <input data-v-62d41194 type="radio" id="bar_0" defaultValue={0} />
          <label data-v-62d41194 htmlFor="bar_0">
            전체
          </label>
        </li>
        <li data-v-62d41194>
          <input data-v-62d41194 type="radio" id="bar_3" defaultValue={3} />
          <label data-v-62d41194 htmlFor="bar_3">
            결혼생활
          </label>
        </li>
        <li data-v-62d41194>
          <input data-v-62d41194 type="radio" id="bar_8" defaultValue={8} />
          <label data-v-62d41194 htmlFor="bar_8">
            취미생활
          </label>
        </li>
        <li data-v-62d41194>
          <input data-v-62d41194 type="radio" id="bar_9" defaultValue={9} />
          <label data-v-62d41194 htmlFor="bar_9">
            레시피공유
          </label>
        </li>
        <li data-v-62d41194>
          <input data-v-62d41194 type="radio" id="bar_1" defaultValue={1} />
          <label data-v-62d41194 htmlFor="bar_1">
            가족이야기
          </label>
        </li>
        <li data-v-62d41194>
          <input data-v-62d41194 type="radio" id="bar_2" defaultValue={2} />
          <label data-v-62d41194 htmlFor="bar_2">
            물물교환
          </label>
        </li>
        <li data-v-62d41194>
          <input data-v-62d41194 type="radio" id="bar_4" defaultValue={4} />
          <label data-v-62d41194 htmlFor="bar_4">
            임신·출산
          </label>
        </li>
        <li data-v-62d41194>
          <input data-v-62d41194 type="radio" id="bar_6" defaultValue={6} />
          <label data-v-62d41194 htmlFor="bar_6">
            연애
          </label>
        </li>
        <li data-v-62d41194>
          <input data-v-62d41194 type="radio" id="bar_7" defaultValue={7} />
          <label data-v-62d41194 htmlFor="bar_7">
            일상·생각
          </label>
        </li>
        <li data-v-62d41194>
          <input data-v-62d41194 type="radio" id="bar_10" defaultValue={10} />
          <label data-v-62d41194 htmlFor="bar_10">
            반려동물
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
