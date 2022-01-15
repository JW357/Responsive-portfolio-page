import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  headerBar: {
    fontFamily: theme.typography.fontFamily,
    background: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    top: '0',
    zIndex: '3',
    '& p': {
      color: 'white',
      fontWeight: '600',
      fontSize: '1.5rem',
    },
  },
  iconBox: {
    display: 'flex',
    width: '15rem',
    justifyContent: 'right',
    [theme.breakpoints.down('mobile')]: {
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
    },
  },
  navigationList: {
    listStyleType: 'none',
    display: 'flex',
    paddingLeft: '0',
    '& a': {
      textDecoration: 'none',
    },
    '& a:first-of-type, & a:nth-child(2)': {
      marginRight: '3rem',
    },
  },
  navigation: {
    color: 'white',
    fontWeight: '500',
    '&:hover, &:active': {
      fontWeight: '800',
    },
  },
  menuIcon: {
    display: 'none',
    color: 'white',
  },
  nameAndNav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  nameBox: {
    display: 'block',
    width: '100%',
    position: 'absolute',
    left: '0',
    textAlign: 'center',
    top: '0.55rem',
    zIndex: '-1',
  },

  // mobile styles

  mobileNavigationList: {
    textAlign: 'center',
    listStyleType: 'none',
    paddingLeft: '0',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '2rem',
    marginBottom: '8.5rem',
    '& a': {
      textDecoration: 'none',
      marginBottom: '1rem',
    },
  },
  mobileMenu: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mobileHeaderBar: {
    position: 'sticky',
    top: '0',
    right: '0',
    left: '0',
    zIndex: '3',
    fontFamily: theme.typography.fontFamily,
    background: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& p': {
      color: 'white',
      fontWeight: '600',
      fontSize: '1.5rem',
    },
  },
  mobileNameAndNav: {
    display: 'flex',
    flexDirection: 'column-reverse',
    width: '100%',
    margin: '1rem',
  },
}));

export default useStyles;
