import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import img4 from '../../backgrounds/5.jpg';
import useStyles from './styles';

function Image4() {
  const classes = useStyles();
  return (
    <Box className={classes.imgBox}>
      <img src={`${img4}`} className={classes.img} alt="something" />
      <Box className={classes.returnButton}>
        <Link to="/*" style={{ textDecoration: 'none' }}>
          <Button color="secondary">
            <ArrowBackIcon />
            <Typography className={classes.buttonText}> Return to the main page </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Image4;
