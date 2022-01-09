import React from 'react';
import { Typography, Toolbar, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ReactComponent as BehanceIcon } from './icons/behanceIcon.svg';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  return (
    <>
      <Toolbar className={classes.headerBar}>
        <Typography>John Doe</Typography>
        <Box className={classes.iconBox}>
          <LinkedInIcon style={{ color: 'white' }} fontSize="large" />
          <InstagramIcon style={{ color: 'white' }} fontSize="large" />
          <FacebookIcon style={{ color: 'white' }} fontSize="large" />
          <BehanceIcon style={{
            fill: 'white', width: '27px', height: '29px', margin: '3px',
          }}
          />
        </Box>
      </Toolbar>
      <Box className={classes.headerBox}>
        <Typography
          className={classes.headerText}
          sx={{ fontSize: 'h2.fontSize' }}
        >
          John Doe
          {' '}
          <br />
          Graphic Designer
        </Typography>
      </Box>
    </>
  );
}

export default Home;
