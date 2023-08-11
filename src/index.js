import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Redux/store"; // Corrected import path

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
