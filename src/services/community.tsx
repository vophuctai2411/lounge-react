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

export function getCommentsByPostID(postID: number) {
  return axios.get(`${API_ENDPOINT}/board/1/post/${postID}/comments`);
}

export function commentOnPost(postID: number, payload: any) {
  return axios.post(`${API_ENDPOINT}/board/1/post/${postID}/comments`, payload);
}

export function commentIconOnPost(postID: number, payload: any) {
  return axios.post(
    `${API_ENDPOINT}/board/1/post/${postID}/comments-emoticon`,
    payload
  );
}

export function getAllEmoticonPackages() {
  return axios.get(`${API_ENDPOINT}/emoticonPackages`);
}

export function get_All_Emoicon_By_PackageID(packageID: any) {
  return axios.get(`${API_ENDPOINT}/emoticonPackages/${packageID}`);
}

//profile page
export function get_myposts(page: number) {
  return axios.get(`${API_ENDPOINT}/board/1/my-posts?page=${page}`);
}

export function get_pickposts(page: number) {
  return axios.get(`${API_ENDPOINT}/board/1/pick-posts?page=${page}`);
}

export function getMyInfo() {
  return axios.get(`${API_ENDPOINT}/me`);
}
