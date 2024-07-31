import type { Contact } from "@/models/contact/data";

export interface ContactListProps {
  items: Contact[];
}

export function ContactList({ items }: ContactListProps) {
  return (
    <ul>
      {items.map(function (item, index) {
        return (
          <li key={index}>
            <span>{item.nickname}</span>
          </li>
        );
      })}
    </ul>
  );
}
