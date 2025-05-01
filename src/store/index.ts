import { configureStore } from "@reduxjs/toolkit";
import utilsReducer from "./utilsSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    utils: utilsReducer,
    userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
