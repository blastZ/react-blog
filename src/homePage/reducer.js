import { GET_LATEST_POSTS } from './actions';

const initState = {
  latestPosts: []
}

const reducer = (state=initState, action) => {
  const { latestPosts } = action;

  switch (action.type) {
    case GET_LATEST_POSTS: {
      return {
        latestPosts
      }
    }
    default: return state;
  }
}

export default reducer;
