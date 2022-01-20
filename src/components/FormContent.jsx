import React from "react";
import {Field} from "react-final-form";
import FieldLayout from "./FieldLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function FormContent(props) {
  return (
    <Box
      component="main"
      sx={{
        width: `calc(100% - ${props.drawerWidth}px)`,
        padding: "24px",
        '& .MuiTextField-root': { marginBottom: "24px" }
      }}
    >
      <Field
        name="firstName"
        label="First name"
        component={FieldLayout}
        innerComponent={TextField}
      />
      <Field
        name="lastName"
        label="Last name"
        component={FieldLayout}
        innerComponent={TextField}
      />
      <Field
        name="label"
        label="Label"
        component={FieldLayout}
        innerComponent={TextField}
      />
      <Field
        name="contacts.phone"
        label="Phone"
        component={FieldLayout}
        innerComponent={TextField}
      />
      <Field
        name="contacts.email"
        label="Email"
        component={FieldLayout}
        innerComponent={TextField}
      />
      <Field
        name="contacts.skype"
        label="Skype"
        component={FieldLayout}
        innerComponent={TextField}
      />
      <Field
        name="extra.resources"
        label="Resources"
        component={FieldLayout}
        innerComponent={TextField}
      />
      <Field
        name="extra.comments"
        label="Comments"
        component={FieldLayout}
        innerComponent={TextField}
      />
      <Button
        type="submit"
        variant="contained"
      >
        Submit
      </Button>
    </Box>
  );
}

export default FormContent;
