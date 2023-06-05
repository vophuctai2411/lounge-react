import {get_all_categories} from "../../../../services/community";
import "./index.scss";
import { useEffect } from "react";

function Categories() {
useEffect(()=>{
  get_all_categories()
},[])



  return <div className="categories-section"></div>;
}

export default Categories;
