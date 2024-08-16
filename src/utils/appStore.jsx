import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer, // 'app' should match how you reference it in useSelector
  },
});

export default appStore;
