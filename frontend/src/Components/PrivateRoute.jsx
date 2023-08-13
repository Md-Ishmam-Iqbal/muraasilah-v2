import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "./Navbar";

const PrivateRoute = () => {
  const { user } = useAuthContext();

  console.log(user);

  return user && user ? (
    <>
      <Navbar user={user} /> {/* Render the Navbar for private routes */}
      <Outlet />
    </>
  ) : (
    <Navigate to={"/"} replace />
  );
};

export default PrivateRoute;
