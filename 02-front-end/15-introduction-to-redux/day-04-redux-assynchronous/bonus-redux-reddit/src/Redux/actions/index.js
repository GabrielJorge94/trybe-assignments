export const REQUEST_API = 'REQUEST_API';
export const GET_REDDIT = 'GET_REDDIT';

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

export function fetchApi(selected) {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch(`https://www.reddit.com/r/${selected}.json`)
      .then(response => response.json())
      .then(data => dispatch(getData(data.data.children)));
  };
}