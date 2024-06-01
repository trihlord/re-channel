import { Provider } from "react-redux";
import { setupStore } from "./store";
import { ContactCreate } from "./features/contact/ContactCreate";
import { ContactConfirm } from "./features/contact/ContactConfirm";
import { ContactList } from "./features/contact/ContactList";

export function App() {
  return (
    <Provider store={setupStore()}>
      <ContactCreate />
      <ContactConfirm />
      <ContactList />
    </Provider>
  );
}
