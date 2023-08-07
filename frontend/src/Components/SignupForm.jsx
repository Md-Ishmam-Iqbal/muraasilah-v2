import { Formik, Field, Form, ErrorMessage } from "formik";

const SignupForm = () => {
  return (
    <main className="center">
      <section className="wrapper">
        <h1 className="text-4xl">Sign Up</h1>
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
            confirm_password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="form-wrapper">
            <label htmlFor="email">Email address</label>
            <Field name="email" type="email" />
            {/* <ErrorMessage name="email" /> */}

            <label htmlFor="lastName">Username</label>
            <Field name="username" type="text" />

            <label>Password</label>
            <Field name="password" type="password" />

            <label>Confirm password</label>
            <Field name="confirm_password" type="password" />

            <button type="submit" className="common-btn">
              Sign Up
            </button>
          </Form>
        </Formik>
        <p>
          Already have an account? <span>Sign In</span>
        </p>
      </section>
    </main>
  );
};

export default SignupForm;
