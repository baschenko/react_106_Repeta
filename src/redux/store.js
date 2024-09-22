import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import balanceReducer from "./balanceSlice";
import localeReducer from "./localeReducer";

const persistConfig = {
  key: "user-balance",
  storage,
  whitelist: ["value"],
};

const persistedBalaceReducer = persistReducer(persistConfig, balanceReducer);

const persistLangConfig = {
  key: "app-lang",
  storage,
  whitelist: ["lang"],
};

const persistedLocaleReducer = persistReducer(persistLangConfig, localeReducer);

export const store = configureStore({
  reducer: {
    balance: persistedBalaceReducer,
    locale: persistedLocaleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
