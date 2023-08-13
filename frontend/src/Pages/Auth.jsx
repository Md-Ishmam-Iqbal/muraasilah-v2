import { useEffect, useState } from "react";

import SignInPage from "../components/SignInPage";
import SignupPage from "../components/SignupPage";
import { useLogout } from "../hooks/useLogout";

const formStyles = {
  label: "block pt-4",
  inputFields:
    "text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-2 w-full",
  checkBox: "text-slate-700 pt-5 w-full flex-col flex items-center",
  errorMsg: "text-red-500 text-sm",
};

const Auth = () => {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  const initialIsSignedUp =
    JSON.parse(localStorage.getItem("signedUp")) === true;
  const [isSignedUp, setIsSignedUp] = useState(initialIsSignedUp);

  const toggleIsSignedUp = () => {
    setIsSignedUp(!isSignedUp);
  };

  useEffect(() => {
    localStorage.setItem("signedUp", isSignedUp); // update localStorage value on change
  }, [isSignedUp]);

  return (
    <div>
      {isSignedUp ? (
        <SignInPage styles={formStyles} togglePage={toggleIsSignedUp} />
      ) : (
        <SignupPage styles={formStyles} togglePage={toggleIsSignedUp} />
      )}
      <div>
        <button onClick={handleLogout} className="w-full bg-blue-100 py-6">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Auth;
