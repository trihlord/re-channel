import { contactCreateSubmit } from "@/features/contactCreate/saga";
import { contactCreateActions } from "@/features/contactCreate/slice";
import { all, takeLatest } from "redux-saga/effects";

export function* rootSaga() {
  yield all([takeLatest(contactCreateActions.submitForm, contactCreateSubmit)]);
}
