import axios from "axios";

export const GET_FAVS_FROM_LS = "GET_FAVS_FROM_LS";
export const SET_FAVS_FROM_LS = "SET_FAVS_FROM_LS";
export const FAV_ADD = "FAV_ADD";
export const FAV_REMOVE = "FAV_REMOVE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const getFavsFromLocalStorage = () => {
  return { type: GET_FAVS_FROM_LS };
};
export const setFavsFromLocalStorage = (localeFavs) => {
  return { type: SET_FAVS_FROM_LS, payload: localeFavs };
};
export const addFav = (info) => {
  return { type: FAV_ADD, payload: info };
};

export const removeFav = (id) => {
  return { type: FAV_REMOVE, payload: id };
};

export const fetchAnother = () => (dispatch) => {
  dispatch({ type: FETCH_LOADING });

  axios

    .get("https://official-joke-api.appspot.com/random_joke")
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({ type: FETCH_ERROR, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: FETCH_LOADING });
    });
};
