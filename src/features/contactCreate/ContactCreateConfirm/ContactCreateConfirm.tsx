import { useAppDispatch, useAppSelector } from "@/features/app/hooks";
import {
  contactCreateActions,
  selectContactCreateStatusPending,
} from "@/features/contactCreate/slice";

export function ContactCreateConfirm() {
  const dispatch = useAppDispatch();
  const isStatusPending = useAppSelector(selectContactCreateStatusPending);

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
