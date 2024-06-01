import { put, race, take } from "redux-saga/effects";
import { contactActions } from "./contactSlice";

interface ContactCreateAction
  extends ReturnType<(typeof contactActions)["create"]> {}

export function* contactCreate(action: ContactCreateAction) {
  const [cancel, confirm] = yield race([
    take(contactActions.cancel),
    take(contactActions.confirm),
  ]);

  if (cancel) {
    return;
  }

  if (confirm) {
    const contact = action.payload;
    yield put(contactActions.concat(contact));
  }
}
