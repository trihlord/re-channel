import { put, race, take } from "redux-saga/effects";
import { contactCreateActions } from "./slice";

interface ContactCreateAction
  extends ReturnType<(typeof contactCreateActions)["submit"]> {}

export function* contactCreateSubmit(action: ContactCreateAction) {
  yield put(contactCreateActions.showConfirm());

  const [cancel, confirm] = yield race([
    take(contactCreateActions.cancelSubmit),
    take(contactCreateActions.confirmSubmit),
  ]);

  if (cancel) {
    yield put(contactCreateActions.hideConfirm());
    return;
  }

  if (confirm) {
    const contact = action.payload;
    yield put(contactCreateActions.concatItems(contact));
    yield put(contactCreateActions.hideConfirm());
  }
}
