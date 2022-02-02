import React from "react";

function FormLayout(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.children}
    </form>
  );
}

export default FormLayout;
