import React, { useEffect } from 'react'
import {Box, Typography, Button} from '@mui/material';
import offerImg1 from '../assets/offerImg1.png'
import offerImg2 from '../assets/offerImg2.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Offer = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

  return (
    <Box
    sx={{mt:9,mb:5}}
    data-aos="zoom-in">
        <Box sx={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center',
            gap:5,
        }}>
            
            <Box
            width={450}
            height={200}
            sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                gap:5,
                background:'var(--background-color)',
                color:'#fff',
                overflow:'hidden'}}>
                <Box sx={{
                    p:2,
                }}>
                    <Typography
                    variant='h4'
                    fontWeight='700'>
                        New Trend
                    </Typography>
                    <Typography
                    variant='body2'
                    sx={{mt:1,mb:1}}>
                        Quality Organic Food Store
                    </Typography>
                    <Button
                    variant='contained'
                    sx={{mt:2,
                        padding:0.8,
                        boxShadow:'none',
                        background:'#fff',
                        color:'#000',
                        fontWeight:'700',
                        textTransform:'capitalize',
                        "&:hover":{
                            background:'var(--button-hover-color)',
                            color:'#fff',
                        }
                    }}>
                        Add to Cart
                    </Button>
                </Box>
                <Box
                width={250}
                height={250}
                sx={{
                    background:'rgba(230, 241, 239,0.3)',
                    borderRadius:'50%',
                    mb:'-100px',
                    mr:'-30px',
                    position:'relative'
                }}>
                    <img
                    src={offerImg1}
                    width={270}
                    height={200}
                    style={{
                        top:'-25px',
                        right:'25px',
                        position:'absolute'}}/>
                </Box>
            </Box>

            <Box
            width={450}
            height={200}
            sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                gap:5,
                background:'var(--button-hover-color)',
                color:'#fff',
                overflow:'hidden'}}>
                <Box sx={{
                    p:2,
                }}>
                    <Typography
                    variant='h4'
                    fontWeight='700'>
                        Sale off 30%
                    </Typography>
                    <Typography
                    variant='body2'
                    sx={{mt:1,mb:1}}>
                        Quality Organic Food Store
                    </Typography>
                    <Button
                    variant='contained'
                    sx={{mt:2,
                        padding:0.8,
                        boxShadow:'none',
                        background:'#fff',
                        color:'#000',
                        fontWeight:'700',
                        textTransform:'capitalize',
                        "&:hover":{
                            background:'var(--button-hover-color)',
                            color:'#fff',
                        }
                    }}>
                        Add to Cart
                    </Button>
                </Box>
                <Box
                width={250}
                height={250}
                sx={{
                    background:'rgba(230, 241, 239,0.3)',
                    borderRadius:'50%',
                    mb:'-100px',
                    mr:'-30px',
                    position:'relative'
                }}>
                    <img
                    src={offerImg2}
                    width={270}
                    height={200}
                    style={{
                        top:'-25px',
                        right:'25px',
                        position:'absolute'}}/>
                </Box>
            </Box>

        </Box>
    </Box>
  )
}

export default Offer
