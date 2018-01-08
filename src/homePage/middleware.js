import { GET_POSTS } from './actions';

//const URL = 'http://www.blastz.cn:5003';
const URL = 'http://localhost:5001';

const middleware = store => next => action => {
  const type = action.type;
  if(type === GET_POSTS) {
    const { category } = action;
    fetch(`${URL}/${category}`)
      .then(res => res.json())
      .then((result) => {
        next({
          type: GET_POSTS,
          posts: result
        })
      })
  } else {
    next(action);
  }
}

export default middleware;
