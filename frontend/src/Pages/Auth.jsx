import SignInForm from "../Components/SignInForm";
import SignupForm from "../Components/SignupForm";

const styles = {
  label: "block pt-4",
  inputFields:
    "text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-2 w-full",
  button: "common-btn",
  errorMsg: "text-red-500 text-sm",
};

const Auth = () => {
  return (
    <div>
      <SignInForm styles={styles} />
      {/* <SignupForm styles={styles} /> */}
    </div>
  );
};

export default Auth;
