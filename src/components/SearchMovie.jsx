import React, { useState, useRef, useEffect } from "react";

import { GetSearchs } from "../MoviedbReposity";
import { AutoComplete } from "primereact/autocomplete";
import { useNavigate, useParams } from "react-router-dom";
import { _, route } from "../lang";
import { useLang } from "./Layout";

export default function SearchMovie() {
  const navigate = useNavigate();

  const [value, setValue] = useState('');
  const [itemsForAutcomplete, setItemsForAutocomplete] = useState([]);
  const [items, setItems] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const lang = useLang()

const search = async (event) => {
  if( event == undefined ) return;
  try {
    const itemsSearch = await GetSearchs(event.query);
    setItemsForAutocomplete(itemsSearch.map(item => item.title));
    setItems(itemsSearch);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  search();
}, [lang]);

  const handleSelect = (e) => {
    let movie = items.find(item => item.title === e.value);
    if (!movie) return;
    return navigate(route("movie/" + movie.id));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(route("search/" + value));
    setValue('');
  }

  const handleClickLupe = (e) => {
    setShowSearch(true);
  }

  return (
    <div className="md:w-1/2" onMouseLeave={() => setShowSearch(false)}>
      <div className="md:hidden" onClick={handleClickLupe}>
        <button
          type="button"
          className="inline-flex flex-shrink-0 justify-center items-center outline-none gap-2 h-10 w-10 rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </button>
      </div>
      <form
        className={
          (showSearch
            ? "block mt-2 mx-2 md:mx-0"
            : "hidden") +
          " card justify-content-center mx-auto absolute inset-0 bg-dark2 md:relative md:w-1/2 md:flex"
        }
        onSubmit={handleSubmit}
      >
        <AutoComplete
          className="w-full text-white"
          value={value}
          suggestions={itemsForAutcomplete}
          completeMethod={search}
          onChange={(e) => setValue(e.value)}
          onSelect={handleSelect}
          placeholder={_('Buscar') + '...'}
        />
      </form>
    </div>

  )
}
