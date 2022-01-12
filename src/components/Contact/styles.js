import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& >': {
      margin: '2rem',
    },
  },
}));

export default useStyles;
