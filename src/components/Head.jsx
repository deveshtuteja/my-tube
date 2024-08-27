import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
import ytLogo from "./yt-dark-logo.png";
import { toggleTheme } from "../utils/themeSlice";

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
    dispatch(toggleTheme());
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
    <div className="grid grid-flow-col shadow-lg p-4 my-2 mb-0 mt-0 dark:bg-black dark:text-white">
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
          className=" text-white px-2"
          onClick={() => {
            handleThemeSwitch();
          }}
        >
          {theme === "dark" ? (
            <>
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
                  fill="#ffffff"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" text-gray-800  dark:text-white"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#1C274C"
                />
              </svg>
            </>
          )}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 rounded-2xl hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-800"
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
          className="rounded-2xl hover:bg-gray-200 w-8 h-8 cursor-pointer dark:hover:bg-gray-800"
          fill={theme === "dark" ? "#ffffff" : "#000000"} // Change color based on theme
        >
          <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
        </svg>
        {theme === "light" ? (
          <img
            className="w-8 h-8 rounded-2xl hover:bg-gray-200 cursor-pointer "
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
