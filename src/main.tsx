import { AppProvider } from "@/features/app/AppProvider";
import { AppRouter } from "@/features/app/AppRouter";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "virtual:uno.css";

const rootElement = document.getElementById("root")!;

const preloadedState = (function () {
  try {
    return JSON.parse(document.getElementById("preloaded-state")!.innerText);
  } catch {
    return undefined;
  }
})();

createRoot(rootElement).render(
  <StrictMode>
    <AppProvider preloadedState={preloadedState}>
      <AppRouter />
    </AppProvider>
  </StrictMode>
);
