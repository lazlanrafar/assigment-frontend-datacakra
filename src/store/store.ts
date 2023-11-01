import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { touristApi } from "./services/tourist";
import { appApi } from "./services/app";

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    [touristApi.reducerPath]: touristApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(touristApi.middleware).concat(appApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
