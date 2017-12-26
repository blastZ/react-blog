import { GET_LATEST_POSTS } from './actions';

const URL = 'http://localhost:5001';

const middleware = store => next => action => {
  const type = action.type;
  if(type === GET_LATEST_POSTS) {
    fetch(`${URL}/latestposts`)
      .then(res => res.json())
      .then((result) => {
        next({
          type: GET_LATEST_POSTS,
          latestPosts: result
        })
      })
  } else {
    next(action);
  }
}

export default middleware;
