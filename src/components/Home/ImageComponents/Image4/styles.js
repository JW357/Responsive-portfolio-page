import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  img: {
    width: '80vw',
    marginTop: '4rem',
  },
  imgBox: {
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonText: {
    textTransform: 'capitalize',
    paddingLeft: '0.5rem',
  },
  returnButton: {
    marginTop: '2rem',
  },
}));

export default useStyles;
