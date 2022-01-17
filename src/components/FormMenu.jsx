import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckOutline from "@mui/icons-material/CheckCircleOutline";
import ListItemText from "@mui/material/ListItemText";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";

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
          <ListItem>
            <ListItemIcon>
              <CheckOutline color="success" />
            </ListItemIcon>
            <ListItemText>
              Menu
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ErrorOutline color="error" />
            </ListItemIcon>
            <ListItemText>
              Menu
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default FormMenu;
