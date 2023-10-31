import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";
import RegisterPage from "../pages/auth/register";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
