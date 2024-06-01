import { useSelector } from "react-redux";
import { selectItems } from "../contactSlice";

export function ContactList() {
  const items = useSelector(selectItems);

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
