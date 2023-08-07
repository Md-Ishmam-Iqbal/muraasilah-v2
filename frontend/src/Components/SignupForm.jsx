import { Formik, Field, Form, ErrorMessage } from "formik";

const SignupForm = ({ styles }) => {
  return (
    <main className="center">
      <section className="wrapper">
        <h1 className="flex items-center justify-center text-4xl">Sign Up</h1>
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

            <label className={styles.label} htmlFor="lastName">
              Username
            </label>
            <Field name="username" type="text" className={styles.inputFields} />

            <label className={styles.label}>Password</label>
            <Field
              name="password"
              type="password"
              className={styles.inputFields}
            />

            <label className={styles.label}>Confirm password</label>
            <Field
              name="confirm_password"
              type="password"
              className={styles.inputFields}
            />
            <button type="submit" className={styles.button}>
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
