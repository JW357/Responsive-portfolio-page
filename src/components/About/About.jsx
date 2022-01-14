/* eslint-disable max-len */
import { Typography, Box } from '@mui/material';
import React from 'react';
import useStyles from './styles';

function About() {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Typography className={classes.aboutHeader} color="secondary" style={{ fontSize: '2rem', fontWeight: '700' }}>About me</Typography>
      <Typography className={classes.aboutText} color="secondary" style={{ fontWeight: '500' }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sit. Deserunt culpa non et nobis, aperiam deleniti minima possimus molestias illum. Voluptatum at repellat excepturi cum, praesentium voluptate quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure voluptas facilis, natus ipsum ipsam, voluptatem voluptatibus provident repellat quia, perferendis facere quidem vel perspiciatis dolorum incidunt nostrum. Maxime, soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sed quisquam magnam, animi beatae in ipsum ipsa consectetur necessitatibus corporis nemo atque nulla fuga voluptates? Amet sunt eius aliquam animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, necessitatibus unde. Fugiat nam consectetur minus! Similique saepe eius tempora? Sint placeat porro consequuntur dolores quasi facere laborum reiciendis corporis iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque sint odio enim repellendus architecto et ducimus porro. Amet tenetur enim omnis, neque itaque, nobis eligendi ea dolor quibusdam quis quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aspernatur sit necessitatibus odio laborum hic, reiciendis veritatis tempora eaque, corporis nihil. Dolor at fugit facilis aut quia facere. Quibusdam, asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nihil sint libero, numquam beatae quasi delectus neque aspernatur nesciunt quibusdam enim quos vero quidem adipisci id voluptatibus quas fugit consequuntur. lorem
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, quia? Id, in, eius quibusdam quis molestias excepturi explicabo enim laborum officiis magni iusto harum exercitationem cupiditate, vero odio expedita illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eum rem, laboriosam praesentium optio nemo magnam, quas ratione nobis dolorem vitae? Quisquam non deleniti quas ratione sit incidunt debitis ex.
      </Typography>
    </Box>
  );
}

export default About;
