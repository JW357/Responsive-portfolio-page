import { React, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import {
  Typography, Toolbar, Box, Link as LinkTo, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as BehanceIcon } from './icons/behanceIcon.svg';
import useStyles from './styles';

function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('mobile'));
  const [isMobileMenu, setIsMobileMenu] = useState(true);

  return (

    <Toolbar className={`${mobile ? classes.mobileHeaderBar : classes.headerBar}`} style={{ height: `${isMobileMenu && mobile ? '100vh' : '100%'}`, position: `${isMobileMenu && mobile ? 'fixed' : 'sticky'}` }}>
      <Box className={`${mobile ? classes.mobileNameAndNav : classes.nameAndNav}`}>
        <ul className={`${mobile ? classes.mobileNavigationList : classes.navigationList}`} style={{ display: `${isMobileMenu ? 'flex' : 'none'}` }}>
          <Link to="/home" onClick={() => (mobile ? setIsMobileMenu(false) : null)}>
            <li className={classes.navigation} style={{ textTransform: 'capitalize' }}>Work</li>
          </Link>
          <Link to="/about" onClick={() => (mobile ? setIsMobileMenu(false) : null)}>
            <li className={classes.navigation} style={{ textTransform: 'capitalize' }}>About</li>
          </Link>
          <Link to="/contact" onClick={() => (mobile ? setIsMobileMenu(false) : null)}>
            <li className={classes.navigation} style={{ textTransform: 'capitalize' }} label="Contact">Contact</li>
          </Link>
        </ul>
        <Box className={`${mobile ? classes.mobileMenu : classes.nameBox}`}>
          <Typography style={{ whiteSpace: 'nowrap' }}>John Doe</Typography>
          <Button onClick={() => setIsMobileMenu(true)} style={{ display: `${!isMobileMenu && mobile ? 'flex' : 'none'}` }}>
            <MenuIcon className={classes.menuIcon} fontSize="large" style={{ display: `${mobile ? 'flex' : 'none'}` }} />
          </Button>
          <Button onClick={() => setIsMobileMenu(false)} style={{ display: `${isMobileMenu && mobile ? 'flex' : 'none'}` }}>
            <CloseIcon className={classes.menuIcon} fontSize="large" style={{ display: `${mobile ? 'flex' : 'none'}` }} />
          </Button>
        </Box>
      </Box>
      <Box className={classes.iconBox} style={{ display: `${isMobileMenu ? 'flex' : 'none'}` }}>
        <LinkTo href="#"><LinkedInIcon style={{ color: 'white' }} fontSize="large" href="#" /></LinkTo>
        <LinkTo href="#"><InstagramIcon style={{ color: 'white' }} fontSize="large" href="#" /></LinkTo>
        <LinkTo href="#"><FacebookIcon style={{ color: 'white' }} fontSize="large" href="#" /></LinkTo>
        <LinkTo href="#">
          <BehanceIcon
            style={{
              fill: 'white', width: '27px', height: '29px', margin: '3px',
            }}
            href="#"
          />

        </LinkTo>
      </Box>
    </Toolbar>

  );
}

export default Nav;
