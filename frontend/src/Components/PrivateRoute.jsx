import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "./Navbar";

const PrivateRoute = () => {
  const { user } = useAuthContext();
  const location = useLocation();
  const isWelcomePage = location.pathname === "/welcome";

  return user && user ? (
    <>
      {!isWelcomePage && <Navbar user={user} />}{" "}
      {/* Render the Navbar for private routes except WelcomePage*/}
      <Outlet />
    </>
  ) : (
    <Navigate to={"/"} replace />
  );
};

export default PrivateRoute;
