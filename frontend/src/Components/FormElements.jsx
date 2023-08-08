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

const MyCheckbox = ({ styles, children, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <div className={styles.checkBox}>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      <ErrorMessage
        component="div"
        name={props.name}
        className={styles.errorMsg}
      />
    </div>
  );
};

export { MyTextInput, MyCheckbox };
