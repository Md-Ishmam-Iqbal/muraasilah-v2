import { Formik, Form } from "formik";

import { MyCheckbox, MyTextInput } from "./FormElements";
import { SignUpValidationSchema } from "../lib/formValidation";

import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const SignupForm = ({ styles, togglePage }) => {
  const { setUsername, setId } = useContext(UserContext);

  const handleSubmit = async (values) => {
    console.log(values);
    const response = await axios.post("http://localhost:3000/register", {
      ...values,
    });
    console.log(response);
    console.log(response.data);
    setUsername(values.username);
  };
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
            <button type="submit" className="common-btn">
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

export default SignupForm;
