import { get_all_categories } from "@/services/community";
import "./index.scss";
import { useEffect, useState } from "react";
import filter_icon from "@/assets/icons/filter.svg";
import CategoryFilterModal from "../category-filter-modal";
import { categoryType } from "@/types/components.type";

function Categories() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [categories, setCategories] = useState<categoryType[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await get_all_categories();
      if (response.status == 200 && response.data.success) {
        const postCategories: categoryType[] = response.data.postCategories;
        setCategories(postCategories);
        setSelectedCategories(postCategories.map((i) => i.id));
      }
    };

    getData();
  }, []);

  return (
    <div className="categories_section">
      <button
        className="filter_adjustment"
        onClick={() => setIsOpenModal(true)}
      >
        <img src={filter_icon} alt="filter icon" />
      </button>

      <ul className="filter_category_list">
        <li key="0">
          <input type="radio" id="0" name="postCategoryGroup" />
          <label htmlFor="0">전체</label>
        </li>
        {categories.map((i) => {
          const key_prefix = `category_list-`;
          if (selectedCategories.includes(i.id)) {
            const category_list_key = key_prefix + `${i.id}`;
            return (
              <li key={category_list_key}>
                <input
                  type="radio"
                  id={category_list_key}
                  name="postCategoryGroup"
                />
                <label htmlFor={category_list_key}>{i.name}</label>
              </li>
            );
          }
        })}
      </ul>

      {isOpenModal && (
        <CategoryFilterModal
          categories={categories}
          setIsOpenModal={setIsOpenModal}
          selectedCategories={selectedCategories}
          saveSelection={setSelectedCategories}
        />
      )}
    </div>
  );
}

export default Categories;
