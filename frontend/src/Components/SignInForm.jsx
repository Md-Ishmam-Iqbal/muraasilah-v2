import { Formik, Form } from "formik";
import { MyTextInput } from "./FormElements";
import { AuthValidationSchema } from "../lib/formValidation";

const SignInForm = ({ styles }) => {
  return (
    <main className="center">
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
          validationSchema={AuthValidationSchema}
          onSubmit={(values) => {
            console.log(values);
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
            <button type="submit" className={styles.button}>
              Sign In
            </button>
          </Form>
        </Formik>
        <p>
          Don't have an account? <span>Sign Up</span>
        </p>
      </section>
    </main>
  );
};

export default SignInForm;
