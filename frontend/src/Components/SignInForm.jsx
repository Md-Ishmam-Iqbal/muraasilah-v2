import { Formik, Field, Form, ErrorMessage } from "formik";

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
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="form-wrapper">
            <label className={styles.label} htmlFor="email">
              Email address
            </label>
            <Field name="email" type="email" className={styles.inputFields} />

            <label className={styles.label}>Password</label>
            <Field
              name="password"
              type="password"
              className={styles.inputFields}
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
