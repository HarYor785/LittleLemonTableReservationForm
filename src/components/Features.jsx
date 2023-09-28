import React,{useEffect} from 'react'
import {Box, Typography, Button} from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import FeatureItems from './utils/featuresItems';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Features = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <Box
    sx={{mt:{md:18,sm:25,xs:35}}}
    data-aos="fade-down"
    id='order'>

        <Box sx={{p:1}}>
            <Typography
            variant='h4'
            fontWeight='600'
            color='var(--button-hover-color)'>
                This Weeks Specials
            </Typography>
            <Typography
            variant='body2'
            color='gray'>
                Discover new tastes and savor limited-time dishes that bring a
                touch of excitement to your <br/>dining experience. Join us this week
                to savor the extraordinary.
            </Typography>
        </Box>
        <Box
        sx={{mt:2,
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center',
            gap:{md:3,sm:5,xs:6},
        }}>
            {
                FeatureItems.map((items, i)=>(
                <Box
                sx={{
                    background: '#edefee',
                    borderRadius: 2,
                    width:300,
                    height:"fitContent",
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    position:'relative',
                    transition:'all 300ms ease',
                    "&:hover":{
                        boxShadow:'0 8px 15px rgba(0,0,0,0.3)'
                    }
                }}>
                    {items.img}
                    
                    {/* CUSTOMERS */}
                    <Box sx={{mt:1,
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                        <Box sx={{
                            display:'flex',
                            alignItems:'center',
                            position:'relative',
                        }}>
                            {items.avatars.map((avatar)=>(
                                avatar
                            ))}
                        </Box>

                        <Box
                        sx={{ml:1,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <StarIcon
                            sx={{color:'var(--button-color)' }}
                            fontSize="inherit" />
                            <Typography
                            variant='body2'
                            fontWeight='900'
                            sx={{color:'var(--button-color)',ml:1}}>
                                {items.ratings}
                            </Typography>
                        </Box>

                    </Box>

                    {/* TITLE */}
                    <Typography
                    fontWeight='900'
                    color='var(--background-color)'
                    sx={{mt:1}}>
                       {items.title}
                    </Typography>

                    {/* PRICE */}

                    <Typography
                    color='var(--button-hover-color)'
                    fontSize='15px'
                    fontWeight='700'>
                        {items.price}
                    </Typography>

                    {/* DESCRIPTION */}
                    <Typography
                    variant='body2'
                    fontSize='11px'
                    color='gray'
                    textAlign='center'
                    padding={2}
                    marginBottom={1}>
                        {items.description}
                    </Typography>

                    {/* ORDER BUTTON */}
                    <Box
                    sx={{
                        position:'absolute',
                        bottom:'-25px',
                        }}>
                        <Button
                        variant='contained'
                        sx={{
                            boxShadow:'0 4px 15px rgba(0,0,0,0.3)',
                            background:'var(--button-color)',
                            color:'#fff',
                            borderRadius:'50px',
                            "&:hover":{
                                background:'var(--button-hover-color)',
                                color:'#fff',
                            }
                        }}>
                            Order Now
                        </Button>
                    </Box>

                </Box>
                ))
            }
            
        </Box>
    </Box>
  )
}

export default Features
