import { setupStore, type PreloadedState } from "@/features/app/store";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

export interface AppProviderProps {
  preloadedState: PreloadedState;
  children: ReactNode;
}

export function AppProvider({ preloadedState, children }: AppProviderProps) {
  return <Provider store={setupStore(preloadedState)}>{children}</Provider>;
}
