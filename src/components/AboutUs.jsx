import React, { useEffect } from 'react'
import {Box, Typography, Button, CardMedia} from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import aboutUsImg from '../assets/aboutUsImg.png'
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar4.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const AboutUs = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

  return (
    <Box sx={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        gap:5,
        mt:1,mb:3,
        background:'var(--background-color)',
        position:'relative',
    }}
    data-aos="zoom-in-left"
    id='about'>
        <Box sx={{p:{md:5,sm:4,xs:2},}}>
            <Typography
            variant='h4'
            fontWeight='700'
            color='#fff'
            sx={{mb:1}}>
                Why We are the Best?
            </Typography>
            <Typography
            variant='body2'
            fontSize='12px'
            color='#dcdcdc'>
            At Little Lemon, we take immense pride in what set
            us apart from the rest We believe<br/> that being the best
            means going above and beyond to create a dining experience<br/>
            that's truly exceptional. Here's why we stand out:
            </Typography>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
            }}>
                <Box
                sx={{p:2,mt:2,
                    display:'flex',
                    alignItems:'center',
                    gap:5,
                    width:400,
                    boxShadow:'0 4px 10px rgba(0,0,0,0.3)',
                    background:'#fff',
                    borderRadius:2,
                }}>
                    <Box sx={{
                        p:1,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        background:'var(--button-color)',
                        borderRadius:'50%'
                    }}>
                        <LocalFloristIcon/>
                    </Box>
                    <Box>
                        <Typography>
                            Fresh and Local
                        </Typography>
                        <Typography
                        variant='body2'
                        fontSize='12px'
                        color='gray'>
                            We are committed to using only the freshest, locally-sourced
                            ingredients in every dish we serve.
                        </Typography>
                    </Box>
                </Box>

                <Box
                sx={{p:2,mt:2,
                    display:'flex',
                    alignItems:'center',
                    gap:5,
                    width:400,
                    boxShadow:'0 4px 10px rgba(0,0,0,0.3)',
                    background:'#fff',
                    borderRadius:2,
                }}>
                    <Box sx={{
                        p:1,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        background:'var(--button-color)',
                        borderRadius:'50%'
                    }}>
                        <FoodBankIcon/>
                    </Box>
                    <Box>
                        <Typography>
                            Culinary Craftsmanship
                        </Typography>
                        <Typography
                        variant='body2'
                        fontSize='12px'
                        color='gray'>
                            Our talented chefs are dedicated to the art of culinary craftsmanship.
                        </Typography>
                    </Box>
                </Box>

                <Box
                sx={{p:2,mt:2,
                    display:'flex',
                    alignItems:'center',
                    gap:5,
                    width:400,
                    boxShadow:'0 4px 10px rgba(0,0,0,0.3)',
                    background:'#fff',
                    borderRadius:2,
                }}>
                    <Box sx={{
                        p:1,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        background:'var(--button-color)',
                        borderRadius:'50%'
                    }}>
                        <RestaurantMenuIcon/>
                    </Box>
                    <Box>
                        <Typography>
                            Diverse Menu
                        </Typography>
                        <Typography
                        variant='body2'
                        fontSize='12px'
                        color='gray'>
                            Our diverse menu offers something for every palate.
                            Whether you're a fan of classic comfort food.
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>

        <Box sx={{
            position:'relative'
        }}>
            <img
            src={aboutUsImg}
            height={500}
            width={500}
            alt="About Us Img" />
            <Box sx={{
                p:3,
                position:'absolute',
                background:'#fff',
                bottom:80,
                borderRadius:5,
                width:180,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                boxShadow:'0 8px 10px rgba(0,0,0,0.3)'
            }}>
                <Typography
                variant='h4'
                fontWeight='700'>
                    30K+
                </Typography>
                <Typography
                variant='body2'>
                    Happy Customers
                </Typography>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    position:'relative',
                }}>
                    <CardMedia
                    component='img'
                    image={avatar1}
                    alt='Avatar'
                    sx={{ml:'-10px',
                    width:30,
                    height:30,
                    borderRadius:'50%',}}/>
                    <CardMedia
                    component='img'
                    image={avatar2}
                    alt='Avatar'
                    sx={{ml:'-10px',
                    width:30,
                    height:30,
                    borderRadius:'50%',}}/>
                    <CardMedia
                    component='img'
                    image={avatar3}
                    alt='Avatar'
                    sx={{ml:'-10px',
                    width:30,
                    height:30,
                    borderRadius:'50%',}}/>
                    <CardMedia
                    component='img'
                    image={avatar4}
                    alt='Avatar'
                    sx={{ml:'-10px',
                    width:30,
                    height:30,
                    borderRadius:'50%',}}/>
                </Box>
            </Box>
        </Box>

    </Box>
  )
}

export default AboutUs
