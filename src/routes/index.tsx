import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";
import RegisterPage from "../pages/auth/register";
import Cookies from "js-cookie";

export default function Router() {
  const token = Cookies.get("token");

  const PrivateRoutes = () => {
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  const PublicRoutes = () => {
    return token ? <Navigate to="/" /> : <Outlet />;
  };

  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
