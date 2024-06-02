import { useAppSelector } from "@/features/app/hooks";
import { selectContactCreateItems } from "@/features/contactCreate/slice";
import { ContactList } from "@/models/contact/ContactList";

export function ContactCreateList() {
  const items = useAppSelector(selectContactCreateItems);

  return <ContactList items={items} />;
}
