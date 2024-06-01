import { rootReducer } from "@/features/app/reducer";
import { rootSaga } from "@/features/app/saga";
import { configureStore } from "@reduxjs/toolkit";
import reduxSaga from "redux-saga";

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
