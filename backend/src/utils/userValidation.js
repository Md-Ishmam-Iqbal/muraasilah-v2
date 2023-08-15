import * as Yup from "yup";

const registerValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .max(50, "Username cannot exceed 50 characters")
    .required("Username is required"),
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
    .max(200, "Password cannot exceed 200 characters")
    .required("Password is required"),
});

const authValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export { registerValidation, authValidation };
