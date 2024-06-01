import { Contact } from "@/models/contact/data";

export interface ContactListProps {
  items: Contact[];
}

export function ContactList({ items }: ContactListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <span>{item.nickname}</span>
        </li>
      ))}
    </ul>
  );
}
