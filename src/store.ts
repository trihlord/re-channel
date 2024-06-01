import { configureStore } from "@reduxjs/toolkit";
import reduxSaga from "redux-saga";
import { rootSaga } from "./saga";
import { rootReducer } from "./reducer";

export function setupStore() {
  const sagaMiddleware = reduxSaga();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
