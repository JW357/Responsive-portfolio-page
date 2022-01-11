import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway',
    subtitle1: {
      fontSize: '2.5rem',
    },
  },
  breakpoints: {
    values: {
      mobileSmall: 350,
      mobile: 820,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
