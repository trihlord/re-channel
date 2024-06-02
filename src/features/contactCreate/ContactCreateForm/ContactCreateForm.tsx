import { useAppDispatch } from "@/features/app/hooks";
import { contactCreateActions } from "@/features/contactCreate/slice";
import {
  ContactForm,
  type ContactFormEvent,
} from "@/models/contact/ContactForm";

export function ContactCreateForm() {
  const dispatch = useAppDispatch();

  function handleSubmit(event: ContactFormEvent) {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const nickname = elements.nickname.value;
    const phoneNumber = elements.phoneNumber.value;

    dispatch(contactCreateActions.submitForm({ nickname, phoneNumber }));
  }

  return <ContactForm onSubmit={handleSubmit} />;
}
