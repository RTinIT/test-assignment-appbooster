import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CurrencyNamesProvider } from "./context/CurrencyNamesProvider";
import { CurrencyProvider } from "./context/CurrencyProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrencyNamesProvider>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
      </CurrencyNamesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
