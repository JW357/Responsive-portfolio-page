import { makeStyles } from '@mui/styles';
import background2 from './backgrounds/background2.jpg';

const useStyles = makeStyles((theme) => ({
  headerBox: {
    height: '80vh',
    textAlign: 'center',
    backgroundImage: `url(${background2})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: '-2',
  },
  headerText: {
    color: 'white',
  },
  mobileImagesBox: {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    width: '90vw',
    margin: '0 auto',
    '& div': {
      width: '100%',
      height: '300px',
      margin: '0.2rem auto',
      overflow: 'hidden',
    },
  },
  imagesBox: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '85%',
    margin: '4rem auto 2rem auto',
    '& div': {
      margin: '2px',
      width: '48%',
      height: '500px',
      overflow: 'hidden',
      position: 'relative',
    },
    '& div:hover': {
      background: theme.palette.secondary.main,
      overflow: 'hidden',
      '& img': {
        transform: 'scale(1.2)',
        transition: 'all 0.8s ease-out',
        opacity: '0.3',
      },
      '& p': {
        opacity: '1',
      },
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    overflow: 'hidden',
  },
  textOverlay: {
    top: '50%',
    left: '50%',
    color: 'white',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    opacity: '0',
  },
  moveUpIcon: {
    position: 'fixed',
    bottom: '0.7rem',
    left: '1rem',
    [theme.breakpoints.down('average')]: {
    },
    [theme.breakpoints.down('smallAverage')]: {
    },

  },
}));

export default useStyles;
