import SignInForm from "../Components/SignInForm";
import SignupForm from "../Components/SignupForm";

const styles = {
  label: "",
  inputFields: "",
  button: "",
  errorMsg: "",
};

const Auth = ({ styles }) => {
  return (
    <div>
      {/* <SignInForm styles={styles} /> */}
      <SignupForm styles={styles} />
    </div>
  );
};

export default Auth;
