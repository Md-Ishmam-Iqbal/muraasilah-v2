import { useEffect, useState } from "react";

import SignInPage from "./SignInPage";
import SignupPage from "./SignupPage";

const styles = {
  label: "block pt-4",
  inputFields:
    "text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-2 w-full",
  checkBox: "text-slate-700 pt-5 w-full flex-col flex items-center",
  errorMsg: "text-red-500 text-sm",
};

const Auth = () => {
  const initialIsLoggedIn =
    JSON.parse(localStorage.getItem("isLoggedIn")) === true;
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
        <SignInPage styles={styles} togglePage={toggleIsLoggedIn} />
      ) : (
        <SignupPage styles={styles} togglePage={toggleIsLoggedIn} />
      )}
    </div>
  );
};

export default Auth;
