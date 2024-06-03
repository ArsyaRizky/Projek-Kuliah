/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";

const formikText = (props, name) => {
  const bind = {
    onChange: useCallback(
      (event) => props.setFieldValue(name, event?.target?.value),
      [name]
    ),
    onBlur: useCallback(() => props.setFieldTouched(name), [name]),
    error: props.errors[name],
    touched: props.touched[name],
    value: props.values[name],
  };

  return bind;
};

export { formikText };
