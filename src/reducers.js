import { toast } from "react-toastify";
import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      return { ...state, favs: [...state.favs, action.payload] };

    case FAV_REMOVE:
      return {
        ...state,
        favs: state.favs.filter((eleman) => action.payload !== eleman.id),
      };

    case FETCH_SUCCESS:
      return { ...state, current: action.payload };

    case FETCH_LOADING:
      return { ...state, loading: !state.loading };

    case FETCH_ERROR:
      return {
        ...state,
        error: toast(`TOSTLU HATA: ${action.payload}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }),
      };

    case GET_FAVS_FROM_LS:
      return state;

    default:
      return state;
  }
}
