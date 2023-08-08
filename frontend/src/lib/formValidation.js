import * as Yup from "yup";

const AuthValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  username: Yup.string()
    .min(2, "Must be at least 2 letters")
    .max(50, "Cannot exceed 50 letters")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password does not match")
    .required("Re-type password"),
});

export { AuthValidationSchema };
