import { App } from "@/features/app/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "virtual:uno.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
