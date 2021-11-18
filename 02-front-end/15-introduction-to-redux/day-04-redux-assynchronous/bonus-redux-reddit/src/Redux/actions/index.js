export const REQUEST_API = 'REQUEST_API';
export const GET_REDDIT = 'GET_REDDIT';
export const CHANGE_SELECTED_SUBREDDIT = 'CHANGE_SELECTED_SUBREDDIT';

export const requestApi = () => {
  return {
    type: REQUEST_API,
  };
}

export const getData = (data) => {
  return {
    type: GET_REDDIT,
    data,
  };
}

export const changeSelectedSubreddit = (dispatch, payload) => {
  dispatch(fetchApi(payload));
  return {
    type: CHANGE_SELECTED_SUBREDDIT,
    payload,
  };
}

export function fetchApi(selectedSubreddit) {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch(`https://www.reddit.com/r/${selectedSubreddit}.json`)
      .then(response => response.json())
      .then(data => { dispatch(getData(data.data.children)) });
  };
}