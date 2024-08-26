import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
import ytLogo from "./yt-dark-logo.png";

const Head = () => {
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-4 my-2 mt-0 dark:bg-black dark:text-white">
      <div className="flex col-span-1">
        {theme === "light" ? (
          <img
            className="w-8 h-8 mr-2 rounded-2xl hover:bg-gray-200 cursor-pointer"
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
            alt="menu-icon"
            onClick={() => handleMenuClick()}
          />
        ) : (
          <img
            src="https://www.citypng.com/public/uploads/preview/transparent-hd-white-menu-burger-icon-701751695037039ulxnzxwywi.png"
            alt="menu-icon"
            className="h-8 w-8 mr-1 cursor-pointer rounded-xl"
            onClick={() => handleMenuClick()}
          />
        )}
        <a href="/">
          {theme === "light" ? (
            <img
              className="h-8 w-32"
              src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
              alt="yt-logo"
            />
          ) : (
            <img src={ytLogo} alt="yt" className="w-32 h-8" />
          )}
        </a>
      </div>
      <div className="flex col-span-9 gap-2 justify-center relative">
        <input
          type="text"
          placeholder="Search"
          className="w-[60%] h-8 rounded-full p-2 border border-gray-400 z-10 dark:text-white dark:bg-gray-800"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <img
          className="w-[36px] h-[34px] cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 z-10 dark:bg-gray-400"
          src="https://static.thenounproject.com/png/2946467-200.png"
          alt="search"
        />
        {showSuggestions && (
          <div className="absolute bg-white w-[60%] top-full mt-[6px] left-[169px] rounded-lg shadow-lg z-20 dark:bg-black">
            {suggestions.length !== 0 && (
              <ul className="py-2 px-4">
                {suggestions.map((s) => (
                  <li
                    className="hover:bg-gray-100 p-2 shadow-sm dark:bg-black dark:text-white dark:hover:bg-gray-950"
                    key={s}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="flex gap-4 col-span-2 justify-end">
        <button
          className="bg-gray-400 text-white px-2 dark:bg-gray-700"
          onClick={() => {
            handleThemeSwitch();
          }}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 rounded-2xl hover:bg-gray-200 cursor-pointer"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
          fill={theme === "dark" ? "#ffffff" : "#000000"} // Change color based on theme
        >
          <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
          className="rounded-2xl hover:bg-gray-200 w-8 h-8 cursor-pointer"
          fill={theme === "dark" ? "#ffffff" : "#000000"} // Change color based on theme
        >
          <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
        </svg>
        {theme === "light" ? (
          <img
            className="w-8 h-8 rounded-2xl hover:bg-gray-200 cursor-pointer"
            src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur.png"
            alt="profile-icon"
          />
        ) : (
          <img
            className="w-9 h-9 cursor-pointer rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/023/465/688/non_2x/contact-dark-mode-glyph-ui-icon-address-book-profile-page-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector.jpg"
            alt="profile-icon"
          />
        )}
      </div>
    </div>
  );
};

export default Head;
