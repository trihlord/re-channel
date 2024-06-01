import {
  contactCreateActions,
  selectIsConfirmHidden,
} from "@/features/contactCreate/slice";
import { useDispatch, useSelector } from "react-redux";

export function ContactCreateConfirm() {
  const dispatch = useDispatch();
  const isHidden = useSelector(selectIsConfirmHidden);

  function handleCancel() {
    dispatch(contactCreateActions.cancelSubmit());
  }

  function handleConfirm() {
    dispatch(contactCreateActions.confirmSubmit());
  }

  return (
    <div className={`flex-col gap-4 w-lg ${isHidden ? "hidden" : "flex"}`}>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}
