import React from 'react';
import { Typography, Box } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const computer = useMediaQuery(theme.breakpoints.up('mobile'));
  const mobile = useMediaQuery(theme.breakpoints.down('mobile'));
  const mobileSmall = useMediaQuery(theme.breakpoints.down('mobileSmall'));

  const checkWidth = () => {
    if (computer) {
      return 'h2';
    } if (mobile && !mobileSmall) {
      return 'h4';
    }
    return 'h5';
  };

  return (
    <Box className={classes.headerBox}>
      <Typography
        className={classes.headerText}
        variant={checkWidth()}
        style={{ fontWeight: '500' }}
      >
        John Doe
        {' '}
        <br />
        Graphic Designer
      </Typography>
      <ArrowCircleDownIcon style={{ color: 'white', transform: 'scale(1.5,1.5)' }} fontSize="large" />
    </Box>
  );
}

export default Home;
