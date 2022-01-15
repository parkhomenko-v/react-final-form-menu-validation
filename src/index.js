import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Field} from 'react-final-form';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CheckOutline from '@mui/icons-material/CheckCircleOutline';
import ErrorOutline from '@mui/icons-material/ErrorOutline';
import FormLayout from './components/FormLayout';
import FieldLayout from './components/FieldLayout';
import reportWebVitals from './reportWebVitals';

const drawerWidth = 240;
const handleSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Field is required'
  }

  if (!values.lastName) {
    errors.lastName = 'Field is required'
  }

  return errors;
};

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Form
      onSubmit={handleSubmit}
      component={FormLayout}
      validate={validate}
    >
      <Box sx={{
        display: 'flex'
      }}
      >
        <Box
          component="nav"
          sx={{
            width: `${drawerWidth}px`
          }}
        >
          <Drawer
            variant="permanent"
            open
            sx={{
              display: "block",
              width: drawerWidth,
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth
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
        <Box
          component="main"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
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
          <Button
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Form>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
