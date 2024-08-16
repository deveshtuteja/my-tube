import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg p-2 m-2">
      <div className="flex col-span-1">
        <img
          className="w-8 h-8 mr-2 rounded-2xl hover:bg-gray-200 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu-icon"
          onClick={() => handleMenuClick()}
        />
        <a href="/">
          <img
            className="h-8 w-32"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="yt-logo"
          />
        </a>
      </div>
      <div className="flex col-span-9 gap-2 justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[60%] h-8 rounded-full p-2 border border-gray-400"
        />
        <img
          className="w-[36px] h-[34px] cursor-pointer bg-gray-50 rounded-full hover:bg-gray-200"
          src="https://static.thenounproject.com/png/2946467-200.png"
          alt="search"
        />
      </div>
      <div className="flex gap-4 col-span-2 justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 rounded-2xl hover:bg-gray-200 cursor-pointer"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
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
        >
          <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
        </svg>
        <img
          className="w-8 h-8 rounded-2xl hover:bg-gray-200 cursor-pointer"
          src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur.png"
          alt="profile-icon"
        />
      </div>
    </div>
  );
};
export default Head;
