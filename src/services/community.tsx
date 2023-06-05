import axios from "axios";
const API_ENDPOINT = process.env.API_ENPOINT;

export function get_all_categories() {
  return axios.get(`${API_ENDPOINT}/postCategories`);
}
