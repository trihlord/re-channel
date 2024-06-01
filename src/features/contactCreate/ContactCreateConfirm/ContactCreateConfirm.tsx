import {
  contactCreateActions,
  selectContactCreateStatusPending,
} from "@/features/contactCreate/slice";
import { useDispatch, useSelector } from "react-redux";

export function ContactCreateConfirm() {
  const dispatch = useDispatch();
  const isStatusPending = useSelector(selectContactCreateStatusPending);

  function handleCancel() {
    dispatch(contactCreateActions.cancelSubmit());
  }

  function handleConfirm() {
    dispatch(contactCreateActions.confirmSubmit());
  }

  return (
    <dialog open={isStatusPending}>
      <div className="flex flex-col gap-4 w-lg">
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </dialog>
  );
}
