import React from 'react';
import {
  Typography, Box,
} from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import image1 from './backgrounds/2.jpg';
import image2 from './backgrounds/3.jpg';
import image3 from './backgrounds/4.jpg';
import image4 from './backgrounds/5.jpg';
import image5 from './backgrounds/6.jpg';
import image6 from './backgrounds/7.jpg';
import image7 from './backgrounds/8.jpg';
import image8 from './backgrounds/10.jpg';

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const computer = useMediaQuery(theme.breakpoints.up('mobile'));
  const mobile = useMediaQuery(theme.breakpoints.down('mobile'));
  const mobileSmall = useMediaQuery(theme.breakpoints.down('mobileSmall'));

  const checkWidth = () => {
    if (computer) {
      return 'h2';
    } if (mobile && !mobileSmall) {
      return 'h4';
    }
    return 'h5';
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const goToGallerySection = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: mobile ? 779 : 751,
      behavior: 'smooth',
    });
  };

  return (
    <Box id="home">
      <Box className={classes.headerBox}>
        <Typography
          className={classes.headerText}
          variant={checkWidth()}
          style={{ fontWeight: '500' }}
        >
          John Doe
          {' '}
          <br />
          Graphic Designer
        </Typography>
        <Box className={classes.scrollButtonBox} style={{ scrollSnapAlign: 'start' }}>
          <Typography style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Check out my Work!</Typography>
          <ArrowCircleDownIcon
            style={{
              color: 'white', fontSize: '5rem',
            }}
            onClick={goToGallerySection}
            duration={500}
          />
        </Box>
      </Box>
      <Box id="gallery">

        <ArrowCircleUpIcon
          className={classes.moveUpIcon}
          style={{ display: `${mobile ? 'none' : 'flex'}`, fontSize: '4rem', zIndex: '6' }}
          color="secondary"
          fontSize="large"
          onClick={scrollToTop}
        />

        <Box className={mobile ? classes.mobileImagesBox : classes.imagesBox}>
          <Box>
            <Link to="/Image1">
              <img className={classes.image} src={image1} alt="something" />
              <Typography style={{ fontSize: '2rem', fontWeight: '600' }} className={classes.textOverlay}>Picture</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/Image2">
              <img className={classes.image} src={image2} alt="something" />
              <Typography style={{ fontSize: '2rem', fontWeight: '600' }} className={classes.textOverlay}>Picture</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/Image3">
              <img className={classes.image} src={image3} alt="something" />
              <Typography style={{ fontSize: '2rem', fontWeight: '600' }} className={classes.textOverlay}>Picture</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/Image4">
              <img className={classes.image} src={image4} alt="something" />
              <Typography style={{ fontSize: '2rem', fontWeight: '600' }} className={classes.textOverlay}>Picture</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/Image5">
              <img className={classes.image} src={image5} alt="something" />
              <Typography style={{ fontSize: '2rem', fontWeight: '600' }} className={classes.textOverlay}>Picture</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/Image6">
              <img className={classes.image} src={image6} alt="something" />
              <Typography style={{ fontSize: '2rem', fontWeight: '600' }} className={classes.textOverlay}>Picture</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/Image7">
              <img className={classes.image} src={image7} alt="something" />
              <Typography style={{ fontSize: '2rem', fontWeight: '600' }} className={classes.textOverlay}>Picture</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/Image8">
              <img className={classes.image} src={image8} alt="something" />
              <Typography style={{ fontSize: '2rem', fontWeight: '600' }} className={classes.textOverlay}>Picture</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
