import axios from "axios";
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
import { getPostParam_Type } from "@/types/request.type";

export function get_all_categories() {
  return axios.get(`${API_ENDPOINT}/postCategories`);
}

export function getAllPost(params: getPostParam_Type) {
  return axios.get(`${API_ENDPOINT}/board/${1}/posts`, { params });
}
