import {
  ContactForm,
  type ContactFormEvent,
} from "@/models/contact/ContactForm";
import { useDispatch } from "react-redux";
import { contactCreateActions } from "../slice";

export function ContactCreateForm() {
  const dispatch = useDispatch();

  function handleSubmit(event: ContactFormEvent) {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const nickname = elements.nickname.value;
    const phoneNumber = elements.phoneNumber.value;

    dispatch(contactCreateActions.submitForm({ nickname, phoneNumber }));
  }

  return <ContactForm onSubmit={handleSubmit} />;
}
