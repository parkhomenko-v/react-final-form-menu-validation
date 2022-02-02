import React from "react";
import {Field} from "react-final-form";
import FieldLayout from "./FieldLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {config} from "./FormMenu";

function FormContent(props) {
  const styles = {
    width: `calc(100% - ${props.drawerWidth}px)`,
    padding: "24px",
    '& .MuiTextField-root': { marginBottom: "24px" }
  };

  return (
    <Box
      component="main"
      sx={styles}
    >
      <TabItem active={props.group === config[0].group}>
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
      </TabItem>
      <TabItem active={props.group === config[1].group}>
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
          name="contacts.address.country"
          label="Country"
          component={FieldLayout}
          innerComponent={TextField}
        />
        <Field
          name="contacts.address.city"
          label="City"
          component={FieldLayout}
          innerComponent={TextField}
        />
        <Field
          name="contacts.address.street"
          label="Street"
          component={FieldLayout}
          innerComponent={TextField}
        />
        <Field
          name="contacts.address.house"
          label="House"
          component={FieldLayout}
          innerComponent={TextField}
        />
      </TabItem>
      <TabItem active={props.group === config[2].group}>
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
      </TabItem>
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

function TabItem(props) {
  return (
    <div style={props.active ? undefined : {display: "none"}}>
      {props.children}
    </div>
  );
}