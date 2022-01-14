import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  about: {
    textAlign: 'center',
  },
  aboutHeader: {
    padding: '2rem',
  },
  aboutText: {
    padding: '2rem 6rem',
    [theme.breakpoints.down('mobile')]: {
      padding: '2rem 4rem',
    },
  },
}));

export default useStyles;
