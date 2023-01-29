import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountriesContextProvider } from "./context/CountriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CountriesContextProvider>
      <App />
    </CountriesContextProvider>
  </>
);
