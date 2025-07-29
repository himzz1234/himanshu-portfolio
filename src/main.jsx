import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ModalProvider from "./context/ModalContext.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";
import AudioProvider from "./context/AudioContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AudioProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AudioProvider>
    </ThemeProvider>
  </StrictMode>
);
