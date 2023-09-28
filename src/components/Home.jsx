import React from 'react'
import {Box, Typography} from '@mui/material';
import Hero from './Hero';
import Features from './Features';
import Menu from './Menu';
import Offer from './Offer';
import AboutUs from './AboutUs';
import Blog from './Blog';


const Home = () => {

    

  return (
    <Box overflow='hidden'>
        <Hero/>
        <Features/>
        <Menu/>
        <Offer/>
        <AboutUs/>
        <Blog/>
    </Box>
  )
}

export default Home
