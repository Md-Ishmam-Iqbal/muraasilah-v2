import { useEffect, useState } from "react";

import SignInForm from "../Components/SignInForm";
import SignupForm from "../Components/SignupForm";

const styles = {
  label: "block pt-4",
  inputFields:
    "text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-2 w-full",
  checkBox: "text-slate-700 pt-5 w-full flex-col flex items-center",
  errorMsg: "text-red-500 text-sm",
};

const Auth = () => {
  const initialIsLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // to ensure page reload loads same page
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  const toggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn); // update localStorage value on change
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <SignInForm styles={styles} togglePage={toggleIsLoggedIn} />
      ) : (
        <SignupForm styles={styles} togglePage={toggleIsLoggedIn} />
      )}
    </div>
  );
};

export default Auth;
