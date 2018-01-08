import { GET_POSTS } from './actions';

const initState = {
  posts: []
}

const reducer = (state=initState, action) => {
  const { posts } = action;

  switch (action.type) {
    case GET_POSTS: {
      return {
        posts
      }
    }
    default: return state;
  }
}

export default reducer;
