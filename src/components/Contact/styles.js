import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  contactForm: {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    margin: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50vw',
    height: '70vh',
    [theme.breakpoints.down('smallAverage')]: {
      width: '80vw',
    },
  },
  name: {
    width: '100%',
  },
  email: {
    width: '100%',
  },
  message: {
    width: '100%',
  },
  submitButton: {
    width: '30%',
    [theme.breakpoints.down('mobile')]: {
      width: '40%',
    },
  },
  formAlert: {
    position: 'absolute',
    width: '40ch',
    top: '10rem',
  },
}));

export default useStyles;
