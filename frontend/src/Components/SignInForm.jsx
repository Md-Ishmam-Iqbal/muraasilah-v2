import { Formik, Form } from "formik";

import { MyTextInput } from "./FormElements";
import { SignInValidationSchema } from "../lib/formValidation";

import axios from "axios";

const SignInForm = ({ styles, togglePage }) => {
  const handleSubmit = async (values) => {
    console.log(values);
    await axios.post("http://localhost:3000/register", { ...values });
  };

  return (
    <main className="centerPage">
      <section className="wrapper">
        <h1 className="flex items-center justify-center text-4xl">Sign In</h1>
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
            confirm_password: "",
            acceptedTerms: false,
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
            <button type="submit" className="common-btn">
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

export default SignInForm;
