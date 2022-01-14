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
      small: 1300,
      smallAverage: 1300,
      average: 1700,
      xl: 1536,
    },
  },
  palette: {
    secondary: {
      main: '#fa2f48',
    },
  },
});

export default theme;
