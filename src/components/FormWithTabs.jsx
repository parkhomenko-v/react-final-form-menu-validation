import React, {useState} from 'react';
import {Form} from 'react-final-form';
import Box from '@mui/material/Box';
import validate from '../validate';
import FormMenu, {config} from './FormMenu';
import FormContent from './FormContent';
import FormLayout from './FormLayout';

const drawerWidth = 240;

function FormWithTabs() {
  const styles = {
    display: 'flex'
  };
  const [group, setGroup] = useState(config[0].group);
  const changeGroup = (newGroup) => {
    setGroup(newGroup);
  };
  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      component={FormLayout}
      validate={validate}
    >
      <Box sx={styles}>
        <FormMenu
          drawerWidth={drawerWidth}
          onChange={changeGroup}
          group={group}
        />
        <FormContent
          drawerWidth={drawerWidth}
          group={group}
        />
      </Box>
    </Form>
  );
}

export default FormWithTabs;
