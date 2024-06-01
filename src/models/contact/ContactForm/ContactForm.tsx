import type { FormEvent, FormEventHandler } from "react";

interface ContactFormElements extends HTMLFormControlsCollection {
  nickname: HTMLInputElement;
  phoneNumber: HTMLInputElement;
}

interface ContactFormElement extends HTMLFormElement {
  readonly elements: ContactFormElements;
}

export interface ContactFormEvent extends FormEvent<ContactFormElement> {}

export interface ContactFormProps {
  onSubmit: FormEventHandler<ContactFormElement>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-lg">
      <label className="flex flex-col">
        <span>Nickname</span>
        <input type="text" name="nickname" />
      </label>
      <label className="flex flex-col">
        <span>Phone number</span>
        <input type="text" name="phoneNumber" inputMode="tel" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
