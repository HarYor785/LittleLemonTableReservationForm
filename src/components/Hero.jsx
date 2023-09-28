import React from 'react'
import {Box, Typography, Button, Grid, styled} from '@mui/material';
import homeImg from "../assets/homeImg.png"
import homeImg1 from "../assets/homeImg1.png"
import testimonial from "../assets/testimonial.png"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const navigate = useNavigate()

    const style = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: "300px",
        height: "300px",
        position:'absolute',
        borderRadius:'50%',
        zIndex:'1',
    }

    const Tags = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:theme.spacing(1),
        gap: theme.spacing(1),
        background:'#fff',
        borderRadius:'15px',
        boxShadow:'0 10px 30px rgba(0,0,0,0.3)',
        position:'absolute',
        zIndex:4
    }))

  return (
    <>
        <Box sx={{
            position:'relative',
            background:'var(--background-color)',
            borderRadius:'30px',
            p:3,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            height:{md:'80vh',sm:'auto',xs:'auto'},
            }}>

                <Grid
                container
                spacing={{md: 2, sm: 1, xs:1}}>
                    {/* LEFT ITEM */}
                    <Grid
                    item md={6}
                    sm={12}
                    xs={12}
                    sx={{display:'flex',alignItems:'center'}}>
                        <Box
                        sx={{
                            color:'#fff',
                            p:2}}>
                            <Typography
                            variant='body2'
                            color="var(--button-color)"
                            fontWeight="400">
                                Welcome to Little Lemon Restaurant
                            </Typography>
                            <Typography variant='h2' fontWeight="700">
                                Little Lemon <br/> Chicago
                            </Typography>
                            <Typography
                            variant='p'
                            sx={{mt:2,}}>
                                We are a family own mediterranean restaurant, focuse on traditional,
                                recipes served with a modern twist.
                            </Typography>

                            <Typography
                            variant='body2'
                            sx={{mt:2,color:'#ddd'}}>
                                Elevate your dining experience with a reserved table at Little Lemon Restaurant.
                                Your reservation ensures priority seating and personalized service, allowing us 
                                to tailor your visit to perfection.
                            </Typography>

                            <Box
                            sx={{
                                display:'flex',
                                gap:2,
                                mt:3}}>
                                <Button
                                onClick={()=>navigate('/reserve-table')}
                                variant='contained'
                                sx={{
                                    background:'var(--button-color)',
                                    color:'#000',
                                    "&:hover":{
                                        background:'var(--button-hover-color)',
                                    },
                                }}>
                                    Reserve a table
                                </Button>
                                <Button
                                variant='contained'
                                sx={{
                                    background:'var(--button-color)',
                                    color:'#000',
                                    "&:hover":{
                                        background:'var(--button-hover-color)',
                                    },
                                }}>
                                    Order for delivery
                                </Button>
                            </Box>

                        </Box>
                    </Grid>

                    {/* RIGHT ITEM */}

                    <Grid
                    item md={6}
                    sm={12} xs={12}>
                        <Box sx={{position:'relative'}}>
                            <Box
                            sx={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                zIndex:2,}}>
                                <Box sx={style}>
                                    <img src={homeImg1}
                                    alt="HomeImg"
                                    className='homeImg'
                                    />
                                </Box>
                                <img
                                src={homeImg}
                                alt='HomeImg'
                                style={{zIndex:3,}}
                                height="500"
                                />
                            </Box>
                            <Tags
                            sx={{
                                top:80,
                                left:10,}}>
                                <AccessTimeIcon
                                sx={{color:'var(--button-hover-color)'}}/>
                                <Typography
                                variant='body2'
                                fontWeight="500">
                                    Fastest Delivery
                                </Typography>
                            </Tags>

                            <Tags
                            sx={{bottom:20,
                                right:10,}}>
                                <FastfoodIcon
                                sx={{color:'var(--button-hover-color)'}}/>
                                <Typography
                                variant='body2'
                                fontWeight="500">
                                    Fresh Ingredients
                                </Typography>
                            </Tags>

                            <Tags
                            sx={{
                                top:120,
                                right:10,
                                }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        borderRadius:'50%',
                                        width:50,
                                        height:50}}
                                    image={testimonial}
                                    alt="Testimonial"
                                />
                                <Box>
                                    <Typography
                                    variant='body2'
                                    fontWeight="600"
                                    fontSize="12px">
                                        Olivia
                                    </Typography>
                                    <Typography
                                    variant='body2'
                                    fontWeight="300"
                                    fontSize="12px">
                                        Great food taste
                                    </Typography>
                                    <Rating
                                    name="read-only"
                                    value={4} readOnly
                                    sx={{fontSize:'15px'}}/>
                                </Box>
                                
                            </Tags>

                            <Tags
                            sx={{
                                bottom:80,
                                left:10,}}>
                                <EventSeatIcon
                                sx={{color:'var(--button-hover-color)'}}/>
                                <Typography
                                variant='body2'
                                fontWeight="500">
                                    Reservation Priority
                                </Typography>
                            </Tags>

                        </Box>
                    </Grid>
                </Grid>

                <Box
                sx={{
                    width:{md: 900, sm:600, xs:400},
                    p:2,
                    background:'#fff',
                    display:'flex',
                    flexWrap:'wrap',
                    justifyContent:'space-between',
                    alignItems:'center',
                    gap:2,
                    position:'absolute',
                    zIndex:5,
                    boxShadow:'0 6px 15px rgba(0,0,0,0.3)',
                    bottom:{md:'-90px',sm:'-220px',xs:'-200px'},
                    borderRadius:'15px'
                    }}>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        gap:2,
                        width:{md:260,sm:180,xs:'100%'}
                        }}>
                        <Box sx={{
                            p:1,
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            background:'var(--button-color)',
                            borderRadius:'50%'
                        }}>
                            <AccessTimeIcon sx={{color:'var(--background-color)'}}/>
                        </Box>
                        <Box>
                            <Typography
                            variant='p'
                            fontWeight="700"
                            color="var(--background-color)">
                                Fast Delivery
                            </Typography>
                            <Typography
                            variant='body2'
                            color='gray'
                            fontSize='12px'>
                            Experience the fastest delivery in town! Your favorite dishes,
                            delivered to your doorstep in no time.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        gap:2,
                        width:{md:260,sm:180,xs:'100%'}
                        }}>
                        <Box sx={{
                            p:1,
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            background:'var(--button-color)',
                            borderRadius:'50%'
                        }}>
                            <AutorenewIcon sx={{color:'var(--background-color)'}}/>
                        </Box>
                        <Box>
                            <Typography
                            variant='p'
                            fontWeight="700"
                            color="var(--background-color)">
                                Fresh Food
                            </Typography>
                            <Typography
                            variant='body2'
                            color='gray'
                            fontSize='12px'>
                            Your Food will be Delivered 100% Fresh to your Doorstep
                            we do not Deliver Stale Food.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        gap:2,
                        width:{md:260,sm:180,xs:'100%'}
                        }}>
                        <Box sx={{
                            p:1,
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            background:'var(--button-color)',
                            borderRadius:'50%'
                        }}>
                            <DeliveryDiningIcon sx={{color:'var(--background-color)'}}/>
                        </Box>
                        <Box>
                            <Typography
                            variant='p'
                            fontWeight="700"
                            color="var(--background-color)">
                                Free Delivery
                            </Typography>
                            <Typography
                            variant='body2'
                            color='gray'
                            fontSize='12px'>
                            Your Food Delivery is Absolutely Free,
                            No Cost just Order and Enjoy.
                            </Typography>
                        </Box>
                    </Box>

                </Box>

        </Box>

    </>
  )
}

export default Hero
