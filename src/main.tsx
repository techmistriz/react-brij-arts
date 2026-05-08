import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.tsx";
import ApplicationsClosedModal from "./pages/PopupModal.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
 
    <App />
  </AuthProvider>,
);

