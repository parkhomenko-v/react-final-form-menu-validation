import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";

const config = [
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
  return (
    <Box
      component="nav"
      sx={{
        width: `${props.drawerWidth}px`
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: "block",
          width: props.drawerWidth,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: props.drawerWidth
          }
        }}
      >
        <List>
          {config.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {index === 0 && <ErrorOutline color="error" /* color="success" *//>}
              </ListItemIcon>
              <ListItemText>
                {item.label}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default FormMenu;
