import
{ TextField }
  from '@mui/material';
import React from 'react';
import useStyles from './styles';

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.contactForm}>
      <TextField variant="standard" label="Name" />
      <TextField variant="standard" label="Email Address" />
      <TextField label="Message" />

    </div>
  );
}

export default Contact;
