import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { touristApi } from "./services/tourist";

export const store = configureStore({
  reducer: {
    [touristApi.reducerPath]: touristApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(touristApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
