import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  headerBar: {
    fontFamily: theme.typography.fontFamily,
    background: '#fa2f48',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    top: '0',
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
    width: '52vw',
    justifyContent: 'space-between',
  },
  nameBox: {
    display: 'flex',
    alignItems: 'center',
    width: '40vw',
    justifyContent: 'right',
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
    background: '#fa2f48',
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
