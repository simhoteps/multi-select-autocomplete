import { configureStore } from "@reduxjs/toolkit";
import { characterApi } from "../services/CharacterService";

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      characterApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
