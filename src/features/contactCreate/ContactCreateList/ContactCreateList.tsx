import { selectItems } from "@/features/contactCreate/slice";
import { ContactList } from "@/models/contact/ContactList";
import { useSelector } from "react-redux";

export function ContactCreateList() {
  const items = useSelector(selectItems);

  return <ContactList items={items} />;
}
