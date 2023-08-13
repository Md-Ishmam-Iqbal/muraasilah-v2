import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = ({ user }) => {
  const { logout } = useLogout();

  return (
    <nav className="grid grid-cols-10 w-full bg-gray-100 h-fit p-3 drop-shadow-md">
      <div className="font-vazirmatn font-extralight text-3xl tracking-wide text-blue-900 col-span-4 flex items-center justify-left mx-20">
        مراسلة
      </div>
      <div className="col-span-2"></div>
      <section className="col-span-2 flex items-center justify-around">
        <Link to="/dashboard" className="text-[#5647ab] font-normal text-lg">
          Dashboard
        </Link>
        <Link to="/profile" className="text-[#5647ab] font-normal text-lg">
          Profile
        </Link>
      </section>
      <div className="col-span-2 flex justify-end">
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
