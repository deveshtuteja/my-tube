import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer, // 'app' should match how you reference it in useSelector
    search: searchReducer,
  },
});

export default appStore;
