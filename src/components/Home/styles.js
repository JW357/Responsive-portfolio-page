import { makeStyles } from '@mui/styles';
import background2 from './background2.jpg';

const useStyles = makeStyles((theme) => ({
  headerBar: {
    fontFamily: theme.typography.fontFamily,
    background: '#fa2f48',
    display: 'flex',
    justifyContent: 'space-between',
    '& p': {
      color: 'white',
      fontWeight: '600',
      fontSize: '1.5rem',
    },
  },
  headerBox: {
    height: '70vh',
    textAlign: 'center',
    backgroundImage: `url(${background2})`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
}));

export default useStyles;
