import * as typeAction from '../constants';
import * as api from '../api';
export const getPostsA = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: typeAction.GET_POST, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
export const createPostA = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);

    dispatch({ type: typeAction.CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updatePostA = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: typeAction.UPDATE_POST, payload: data })
  } catch (error) {
    console.log(error)
  }
}
export const updateLikeA = (id) => async (dispatch) => {
  try {
    const {data} = await api.updateLike(id);
    dispatch({ type: typeAction.UPDATE_LIKE, payload: data })
  } catch (error) {
    console.log(error.message)

  }
}
// export const deletePostA = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id)
//     dispatch({ type: typeAction.DELETE_POST, payload: id })
//   } catch (error) {
//     console.log(error)
//   }
// }
export const deletePostA = (post) => async (dispatch) => {
  try {
    await api.deletePost(post);
    dispatch({ type: typeAction.DELETE_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};