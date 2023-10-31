import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
