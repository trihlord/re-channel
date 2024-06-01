import type { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { contactActions } from "../contactSlice";

interface ContactCreateFormElements extends HTMLFormControlsCollection {
  nickname: HTMLInputElement;
  phoneNumber: HTMLInputElement;
}

interface ContactCreateFormElement extends HTMLFormElement {
  readonly elements: ContactCreateFormElements;
}

interface ContactCreateEvent extends FormEvent<ContactCreateFormElement> {}

export function ContactCreate() {
  const dispatch = useDispatch();

  function handleSubmit(event: ContactCreateEvent) {
    event.preventDefault();

    const nickname = event.currentTarget.elements.nickname.value;
    const phoneNumber = event.currentTarget.elements.phoneNumber.value;

    dispatch(contactActions.showConfirm());
    dispatch(contactActions.create({ nickname, phoneNumber }));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-lg">
      <label className="flex flex-col">
        <span>Nickname</span>
        <input type="text" name="nickname" />
      </label>
      <label className="flex flex-col">
        <span>Phone number</span>
        <input type="tel" name="phoneNumber" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
