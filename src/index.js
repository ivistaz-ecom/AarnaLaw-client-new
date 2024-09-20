import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./Components/LanguageContext";
import "./index.css";
import App from './App';

export { default as PracticeArea } from "./Components/PracticeArea";
export { default as Home } from "./Components/Home";

export { default as SearchWidget } from "./Components/SearchWidget";
export { default as Footer } from "./Components/Footer";
export { default as Automotiveindustry } from "./Components/automotiveindustry";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </React.StrictMode>
  </BrowserRouter>
);
