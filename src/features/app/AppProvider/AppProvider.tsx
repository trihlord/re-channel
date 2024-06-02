import { setupStore, type AppPreloadedState } from "@/features/app/store";
import { ContactCreateConfirm } from "@/features/contactCreate/ContactCreateConfirm";
import { ContactCreateForm } from "@/features/contactCreate/ContactCreateForm";
import { ContactCreateList } from "@/features/contactCreate/ContactCreateList";
import { Provider } from "react-redux";

export interface AppProviderProps {
  preloadedState: AppPreloadedState;
}

export function AppProvider({ preloadedState }: AppProviderProps) {
  return (
    <Provider store={setupStore(preloadedState)}>
      <ContactCreateForm />
      <ContactCreateConfirm />
      <ContactCreateList />
    </Provider>
  );
}
