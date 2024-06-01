import { useDispatch, useSelector } from "react-redux";
import { contactActions, selectIsConfirmHidden } from "../contactSlice";

export function ContactConfirm() {
  const dispatch = useDispatch();
  const isHidden = useSelector(selectIsConfirmHidden);

  function handleCancel() {
    dispatch(contactActions.cancel());
    dispatch(contactActions.hideConfirm());
  }

  function handleConfirm() {
    dispatch(contactActions.confirm());
    dispatch(contactActions.hideConfirm());
  }

  return (
    <div className={`flex-col gap-4 w-lg ${isHidden ? "hidden" : "flex"}`}>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}
