import { useAppSelector } from "@/features/app/hooks";
import { contactCreateSelectors } from "@/features/contactCreate/slice";
import { ContactList } from "@/models/contact/ContactList";

export function ContactCreateList() {
  const items = useAppSelector(contactCreateSelectors.items);

  return <ContactList items={items} />;
}
