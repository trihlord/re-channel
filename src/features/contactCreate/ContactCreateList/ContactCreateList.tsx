import { selectContactCreateItems } from "@/features/contactCreate/slice";
import { ContactList } from "@/models/contact/ContactList";
import { useSelector } from "react-redux";

export function ContactCreateList() {
  const items = useSelector(selectContactCreateItems);

  return <ContactList items={items} />;
}
