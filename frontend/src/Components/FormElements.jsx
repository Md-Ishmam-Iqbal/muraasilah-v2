import { Field, ErrorMessage, useField } from "formik";

const MyTextInput = ({ styles, label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <Field className={styles.inputFields} {...field} {...props} />
      <ErrorMessage
        component="div"
        name={props.name}
        className={styles.errorMsg}
      />
    </>
  );
};

export { MyTextInput };
