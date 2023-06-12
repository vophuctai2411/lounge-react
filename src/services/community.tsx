import axios from "axios";
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
import { getPostParam_Type } from "@/types/request.type";

export function get_all_categories() {
  return axios.get(`${API_ENDPOINT}/postCategories`);
}

export function getAllPost(params: getPostParam_Type) {
  return axios.get(`${API_ENDPOINT}/board/${1}/posts`, { params });
}

export function likeAPI(postID: number, commentID?: number) {
  if (commentID)
    axios.post(
      `${API_ENDPOINT}/board/1/post/${postID}/comments/${commentID}/like`
    );
  else axios.post(`${API_ENDPOINT}/board/1/posts/${postID}/like`);
}

export function dislikeAPI(postID: number, commentID?: number) {
  if (commentID)
    axios.post(
      `${API_ENDPOINT}/board/1/post/${postID}/comments/${commentID}/dislike`
    );
  else axios.post(`${API_ENDPOINT}/board/1/posts/${postID}/dislike`);
}

export function getPostByID(id: string | undefined) {
  return axios.get(`${API_ENDPOINT}/board/1/posts/${id}`);
}
