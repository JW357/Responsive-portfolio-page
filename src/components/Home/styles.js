import { makeStyles } from '@mui/styles';
import background2 from './background2.jpg';

const useStyles = makeStyles(() => ({
  headerBox: {
    height: '70vh',
    textAlign: 'center',
    backgroundImage: `url(${background2})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
  },
}));

export default useStyles;
