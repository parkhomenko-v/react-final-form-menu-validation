import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'react-final-form';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import validate from './validate';
import FormMenu from './components/FormMenu';
import FormContent from './components/FormContent';
import FormLayout from './components/FormLayout';

const drawerWidth = 240;

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

function handleSubmit(values) {
  console.log(values);
}
