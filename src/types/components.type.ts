import { TSX_Element_Type } from "./basic.type"

export type modalType = {
    header?: TSX_Element_Type;
    content: TSX_Element_Type;
    footer?: TSX_Element_Type;
}

export type categoryType = {
    id: number;
    name: string;
}

export type CategoryFilterModalType = {
    categories: categoryType[],
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCategories: number[];
    saveSelection:  React.Dispatch<React.SetStateAction<number[]>>
}