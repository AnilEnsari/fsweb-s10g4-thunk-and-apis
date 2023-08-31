import { toast } from "react-toastify";
import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
  SET_FAVS_FROM_LS,
} from "./actions";

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}
const getItem = readFavsFromLocalStorage();
console.log(getItem);
const initial = {
  favs: getItem ? getItem : [],
  current: null,
  error: null,
  loading: false,
};

// function writeFavsToLocalStorage(state) {
//   return localStorage.setItem("s10g4", JSON.stringify(state.favs));
// }

export function myReducer(state = initial, action) {
  switch (action.type) {
    case SET_FAVS_FROM_LS:
      localStorage.setItem("s10g4", JSON.stringify(state.favs));
      return state;

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
      readFavsFromLocalStorage();
      return state;

    default:
      return state;
  }
}
