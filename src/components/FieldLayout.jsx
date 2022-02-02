import React from "react";

function FieldLayout(props) {
  const id = React.useRef(Math.random().toString(36).substr(2, 9));
  const {innerComponent, children, input, meta, ...rest} = props;
  const error = meta.error || meta.submitError;
  const showError = Boolean(error);

  return React.createElement(
    innerComponent,
    {
      id: id.current,
      name: input.name,
      onBlur: input.onBlur,
      onFocus: input.onFocus,
      onChange: input.onChange,
      value: input.value,
      label: rest.label,
      variant: "outlined",
      fullWidth: true,
      helperText: showError ? error : undefined,
      error: showError
    },
    children
  )
}

export default FieldLayout;
