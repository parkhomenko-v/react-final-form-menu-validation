import React from "react";

const FormLayout = (props) => (
  <form onSubmit={props.handleSubmit}>
    {props.children}
  </form>
);

export default FormLayout;
