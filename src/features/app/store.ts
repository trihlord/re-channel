import { rootReducer, type RootState } from "@/features/app/reducer";
import { rootSaga } from "@/features/app/saga";
import { configureStore } from "@reduxjs/toolkit";
import reduxSaga from "redux-saga";

export type PreloadedState = RootState | undefined;

export function setupStore(preloadedState: PreloadedState) {
  const sagaMiddleware = reduxSaga();

  const store = configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
