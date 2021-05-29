import axios from 'axios';

const url = 'http://localhost:5000/post';

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const updateLike = (id) => axios.patch(`${url}/${id}/like-count`);
export const deletePost= (id) => axios.delete(`${url}/${id}`);