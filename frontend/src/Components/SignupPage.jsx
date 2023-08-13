import { Formik, Form } from "formik";

import { MyCheckbox, MyTextInput } from "./FormElements";
import { SignUpValidationSchema } from "../lib/formValidation";

import { useSignup } from "../hooks/useSignUp";

const SignupPage = ({ styles, togglePage }) => {
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (values) => await signup(values);

  return (
    <main className="centerPage">
      <section className="wrapper">
        <h1 className="flex items-center justify-center text-4xl">Sign Up</h1>
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
            confirm_password: "",
            acceptedTerms: false,
          }}
          validationSchema={SignUpValidationSchema}
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
              label="Username"
              name="username"
              type="text"
            />
            <MyTextInput
              styles={styles}
              label="Password"
              name="password"
              type="password"
            />
            <MyTextInput
              styles={styles}
              label="Confirm password"
              name="confirm_password"
              type="password"
            />
            <MyCheckbox name="acceptedTerms" styles={styles}>
              {" "}
              I accept the terms and conditions
            </MyCheckbox>
            {error && <div className={styles.errorMsg}>{error}</div>}
            <button type="submit" className="common-btn" disabled={isLoading}>
              Sign Up
            </button>
          </Form>
        </Formik>
        <p className="flex items-center justify-center">
          Already have an account?&nbsp;
          <span onClick={() => togglePage()}>Sign In</span>
        </p>
      </section>
    </main>
  );
};

export default SignupPage;
