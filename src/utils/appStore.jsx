import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";
import themeReducer from "./themeSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer, // 'app' should match how you reference it in useSelector
    search: searchReducer,
    chat: chatReducer,
    theme: themeReducer,
  },
});

export default appStore;
