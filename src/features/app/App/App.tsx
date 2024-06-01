import { setupStore } from "@/features/app/store";
import { ContactCreateConfirm } from "@/features/contactCreate/ContactCreateConfirm";
import { ContactCreateForm } from "@/features/contactCreate/ContactCreateForm";
import { ContactCreateList } from "@/features/contactCreate/ContactCreateList";
import { Provider } from "react-redux";

export function App() {
  return (
    <Provider store={setupStore()}>
      <ContactCreateForm />
      <ContactCreateConfirm />
      <ContactCreateList />
    </Provider>
  );
}
