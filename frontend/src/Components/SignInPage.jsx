import { Formik, Form } from "formik";

import { MyTextInput } from "./FormElements";
import { SignInValidationSchema } from "../lib/formValidation";

import { useLogin } from "../hooks/useLogin";

const SignInPage = ({ styles, togglePage }) => {
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (values) => await login(values);

  return (
    <main className="centerPage">
      <section className="wrapper">
        <h1 className="flex items-center justify-center text-4xl">Sign In</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignInValidationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className="form-wrapper">
            <MyTextInput
              styles={styles}
              label="Email Address"
              name="email"
              type="email"
            />
            <MyTextInput
              styles={styles}
              label="Password"
              name="password"
              type="password"
            />
            {error && <div className={styles.errorMsg}>{error}</div>}
            <button disabled={isLoading} type="submit" className="common-btn">
              Sign In
            </button>
          </Form>
        </Formik>
        <p className="flex items-center justify-center">
          Don't have an account?&nbsp;
          <span onClick={() => togglePage()}>Sign Up</span>
        </p>
      </section>
    </main>
  );
};

export default SignInPage;
