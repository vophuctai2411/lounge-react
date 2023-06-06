import axios from "axios";
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export function get_all_categories() {
  return axios.get(`${API_ENDPOINT}/postCategories`);
}
