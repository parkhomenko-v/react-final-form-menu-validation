import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'react-final-form';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import FormMenu from './components/FormMenu';
import FormContent from './components/FormContent';
import FormLayout from './components/FormLayout';
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
      <Box sx={{ display: 'flex' }}>
        <FormMenu drawerWidth={drawerWidth} />
        <FormContent drawerWidth={drawerWidth} />
      </Box>
    </Form>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
