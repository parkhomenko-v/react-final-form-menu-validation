import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from '@mui/material/ListItemButton';
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";

export const config = [
  {
    names: [],
    group: 'information',
    label: 'Information'
  },
  {
    names: [],
    group: 'contacts',
    label: 'Contacts'
  },
  {
    names: [],
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
            <FormMenuItem
              key={index}
              erroneous={index === 1}
              item={item}
              onChange={props.onChange}
              active={props.group === item.group}
            />
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default FormMenu;

function FormMenuItem(props) {
  const handleChange = () => {
    props.onChange(props.item.group);
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
        {props.item.label}
      </ListItemText>
    </ListItemButton>
  );
}
