import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = ({ user }) => {
  const { logout } = useLogout();

  return (
    <header className="pb-10">
      <div>
        <h1 className="p-2 m-4">Muraasilat</h1>
        <nav>
          <div>
            <Link to="/" className="p-2 m-4 bg-blue-100">
              Login
            </Link>
            <Link to="/welcome" className="p-2 m-4 bg-blue-100">
              Welcome
            </Link>
            <Link to="/dashboard" className="p-2 m-4 bg-blue-100">
              Dashboard
            </Link>
            <Link to="/profile" className="p-2 m-4 bg-blue-100">
              Profile
            </Link>
            <button onClick={logout}>Logout</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
