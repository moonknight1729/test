
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import "./index.css";
import App from "./App.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Signup from "./components/Signup.jsx";
import AuthProvider from "./hooks/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<App />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
