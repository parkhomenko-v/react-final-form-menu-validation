import React from "react";
import {Field} from "react-final-form";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from '@mui/material/ListItemButton';
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";

export const config = [
  {
    names: ["firstName", "lastName"],
    group: 'information',
    label: 'Information'
  },
  {
    names: ["contacts.phone", "contacts.email", "contacts.address"],
    group: 'contacts',
    label: 'Contacts'
  },
  {
    names: ["extra.resources"],
    group: 'extra',
    label: 'Extra'
  }
];

function FormMenu(props) {
  const styles = {
    root: {
      width: `${props.drawerWidth}px`
    },
    drawer: {
      display: "block",
      width: props.drawerWidth,

      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: props.drawerWidth
      }
    }
  };

  return (
    <Box
      component="nav"
      sx={styles.root}
    >
      <Drawer
        variant="permanent"
        open
        sx={styles.drawer}
      >
        <List>
          {config.map((item, index) => (
            <RecurseField
              key={index}
              names={item.names}
              group={item.group}
              label={item.label}
              active={props.group === item.group}
              onChange={props.onChange}
            />
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default FormMenu;

function RecurseField(props) {
  if (!props.names.length) {
    return (
      <FormMenuItem
        erroneous={props.erroneous}
        group={props.group}
        label={props.label}
        active={props.active}
        onChange={props.onChange}
      />
    );
  }

  const [name, ...rest] = props.names;

  return (
    <Field name={name}>
      {({meta}) => {
        const submitError = !meta.dirtySinceLastSubmit && meta.submitError;
        const error = Boolean(meta.error || submitError);

        return (
          <RecurseField
            names={rest}
            group={props.group}
            label={props.label}
            active={props.active}
            onChange={props.onChange}
            erroneous={error ? props.erroneous || error : props.erroneous}
          />
        );
      }}
    </Field>
  );
}

function FormMenuItem(props) {
  const handleChange = () => {
    props.onChange(props.group);
  };

  return (
    <ListItemButton
      onClick={handleChange}
      selected={props.active}
    >
      <ListItemIcon>
        {props.erroneous && <ErrorOutline color="error" />}
      </ListItemIcon>
      <ListItemText>
        {props.label}
      </ListItemText>
    </ListItemButton>
  );
}
