import { contactCreateActions } from "@/features/contactCreate/slice";
import type { SagaIterator } from "redux-saga";
import { put, race, take } from "redux-saga/effects";

interface ContactCreateSubmitFormAction
  extends ReturnType<(typeof contactCreateActions)["submitForm"]> {}

export function* contactCreateSubmitForm(
  action: ContactCreateSubmitFormAction
): SagaIterator {
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
