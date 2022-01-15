import
{
  TextField, Typography, Button, Box, Alert,
}
  from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './styles';

function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('mobile'));
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    message: '',
    errorName: '',
    errorEmail: '',
  });
  const [alert, setAlert] = useState('none');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.name.length < 2) {
      setUserInput(((prevState) => ({
        ...prevState,
        errorName: 'Name must contain at least 2 characters',
      })));
    } else {
      setUserInput(((prevState) => ({
        ...prevState,
        errorName: '',
      })));
    }

    if (userInput.message.length === 0) {
      setUserInput(((prevState) => ({
        ...prevState,
        errorMessage: 'Message field cannot be empty',
      })));
    } else {
      setUserInput(((prevState) => ({
        ...prevState,
        errorName: '',
      })));
    }

    const validation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!validation.test(userInput.email)) {
      setUserInput(((prevState) => ({
        ...prevState,
        errorEmail: 'Invalid e-mail address',
      })));
    } else {
      setUserInput({
        ...userInput,
        errorEmail: '',
      });
    }

    if (userInput.name.length >= 2
      && validation.test(userInput.email)
    ) { setAlert('flex'); }
  };

  return (
    <div className={classes.contactForm}>
      <Typography color="secondary" style={{ fontSize: `${mobile ? '1.5rem' : '2rem'}`, fontWeight: 600, textAlign: 'center' }}> Contact me by filling this form</Typography>
      <Alert
        className={classes.formAlert}
        style={{ display: alert }}
        severity="success"
      >
        {userInput.name }
        , your message have been sent
      </Alert>
      <Box onSubmit={(e) => handleSubmit(e)} component="form" className={classes.formControl}>
        <TextField
          onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
          value={userInput.name}
          error={userInput.errorName}
          helperText={userInput.errorName}
          className={classes.name}
          variant="filled"
          color="secondary"
          label="Name"
        />
        <TextField
          onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
          value={userInput.email}
          error={userInput.errorEmail}
          helperText={userInput.errorEmail}
          className={classes.email}
          variant="filled"
          color="secondary"
          label="Email Address"
        />
        <TextField
          onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
          value={userInput.message}
          className={classes.message}
          error={userInput.errorMessage}
          helperText={userInput.errorMessage}
          rows={8}
          variant="filled"
          color="secondary"
          label="Message"
          multiline
        />
        <Button type="submit" variant="contained" color="secondary" className={classes.submitButton} style={{ textTransform: 'capitalize', padding: '1rem' }}>Submit</Button>
      </Box>

    </div>
  );
}

export default Contact;
