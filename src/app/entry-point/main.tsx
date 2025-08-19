import { QueryClientProvider } from "@tanstack/react-query";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HomePage } from "../../pages/home-page";
import { queryClient } from "../../shared/client";
import "../styles/index.css";
import "../styles/reset.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  </StrictMode>,
);
