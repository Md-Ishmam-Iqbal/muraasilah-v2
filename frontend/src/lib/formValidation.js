import * as Yup from "yup";

const SignUpValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  username: Yup.string()
    .min(2, "Must be at least 2 letters")
    .max(50, "Cannot exceed 50 letters")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .test(
      "lowercase",
      "Password must contain at least one lowercase letter",
      (value) => /[a-z]/.test(value)
    )
    .test(
      "uppercase",
      "Password must contain at least one uppercase letter",
      (value) => /[A-Z]/.test(value)
    )
    .test(
      "specialSymbol",
      "Password must contain at least one special symbol",
      (value) => /[!@#$%^&*]/.test(value)
    )
    .max(200, "Password must not exceed 200 characters")
    .required("Required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password does not match")
    .required("Re-type password"),
  acceptedTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "Please accept the terms and conditions."),
});

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email or Username is required"),
  username: Yup.string().required("Email or Username is required"),
  password: Yup.string().required("Password is required"),
});

export { SignUpValidationSchema, SignInValidationSchema };
