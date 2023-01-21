import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CurrencyProvider } from "./context/CurrencyProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
