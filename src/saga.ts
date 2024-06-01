import { all, takeLatest } from "redux-saga/effects";
import { contactCreate } from "./features/contact/contactSaga";
import { contactActions } from "./features/contact/contactSlice";

export function* rootSaga() {
  yield all([takeLatest(contactActions.create, contactCreate)]);
}
