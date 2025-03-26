import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SnackbarProvider } from "notistack"; // Import SnackbarProvider

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider maxSnack={3}>
      {" "}
      {/* Wrap App with SnackbarProvider */}
      <App />
    </SnackbarProvider>
  </StrictMode>
);
