import { get_all_categories } from "@/services/community";
import "./index.scss";
import { useState } from "react";
import filter_icon from "@/assets/icons/filter.svg";
import CategoryFilterModal from "../category-filter-modal";
import { categoryType } from "@/types/components.type";
import { useQuery } from "@tanstack/react-query";

function Categories({ setChosenCategory }: any) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showCategories, setShowCategories] = useState<number[]>([]);

  const { data: allCategories } = useQuery({
    queryKey: ["categories_Query"],
    queryFn: () =>
      get_all_categories().then((response) => response.data.postCategories),
    onSuccess: (data) => {
      const postCategories: categoryType[] = data;
      setShowCategories(postCategories.map((i) => i.id));
    },
    staleTime: 10000,
  });

  return (
    allCategories && (
      <div className="categories_section">
        <button
          className="filter_adjustment"
          onClick={() => setIsOpenModal(true)}
        >
          <img src={filter_icon} alt="filter icon" />
        </button>

        <ul className="filter_category_list">
          <li key="0" onClick={() => setChosenCategory(0)}>
            <input type="radio" id="0" name="postCategoryGroup" />
            <label htmlFor="0">전체</label>
          </li>
          {allCategories.map((i: any) => {
            const key_prefix = `category_list-`;
            if (showCategories.includes(i.id)) {
              const category_list_key = key_prefix + `${i.id}`;
              return (
                <li key={category_list_key}>
                  <input
                    type="radio"
                    id={category_list_key}
                    name="postCategoryGroup"
                    onClick={() => setChosenCategory(i.id)}
                  />
                  <label htmlFor={category_list_key}>{i.name}</label>
                </li>
              );
            }
          })}
        </ul>

        {isOpenModal && (
          <CategoryFilterModal
            categories={allCategories}
            setIsOpenModal={setIsOpenModal}
            selectedCategories={showCategories}
            saveSelection={setShowCategories}
          />
        )}
      </div>
    )
  );
}

export default Categories;
