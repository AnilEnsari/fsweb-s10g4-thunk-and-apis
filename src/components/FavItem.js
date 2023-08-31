import React from "react";
import { useDispatch } from "react-redux";
import { removeFav, setFavsFromLocalStorage } from "../actions";

function FavItem({ title, id, setup }) {
  const dispatch = useDispatch();
  const clearHandler = () => {
    dispatch(removeFav(id));
    dispatch(setFavsFromLocalStorage());
  };
  return (
    <div className="bg-white shadow hover:shadow-lg p-3 pl-5 flex items-center group transition-all">
      <div className="flex-1 pr-4">
        {setup}--
        {title}
      </div>
      <button
        onClick={clearHandler}
        className="transition-all px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}

export default FavItem;
