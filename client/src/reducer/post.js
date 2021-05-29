import * as typeAction from '../constants';
const initialState = []

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case typeAction.GET_POST:
      return payload;
    case typeAction.DELETE_POST:
      return state.filter(post => post._id !== payload);
    case typeAction.CREATE_POST:
      return [...state, payload];
      case typeAction.UPDATE_POST:
      console.log(payload)
      const data = state.map(item => item._id === payload._id ? {...item,...payload} : item)
      return data;
    // eslint-disable-next-line no-duplicate-case
    case typeAction.UPDATE_LIKE:
      const likeCount = state.map(item => item._id === payload._id ? payload : item)
      return likeCount;
    default:
      return state;
  }
}
