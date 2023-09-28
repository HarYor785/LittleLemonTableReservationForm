import React, { useEffect } from 'react'
import {Box, Typography, Button} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { MenuItem } from './utils/menuItem';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Menu = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (

        <Box sx={{mt:9,mb:3,}} data-aos="fade-up" id='menu'>
            <Box sx={{p:1}}>
                <Typography
                variant='h4'
                fontWeight='600'
                color='var(--button-hover-color)'>
                    Our Regular Menu
                </Typography>
                <Typography
                variant='body2'
                color='gray'>
                    Those are Our Regular Menu
                    You Can Oder Anything You Like
                </Typography>
            </Box>
            <Box
            sx={{
            margin:'2.5rem 2rem',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center',
            gap:10,}}>
                {
                    MenuItem.map((item)=>(
                        <Box sx={{
                            width:180,
                            height:250,
                            background:'#edefee',
                            position:'relative',
                            borderRadius:4,
                            display:'block'
                        }}>
                            <CardMedia
                            component='img'
                            image={item.img}
                            alt='Greek Salad'
                            sx={{
                                width:120,
                                height:120,
                                borderRadius:'50%',
                                position:'absolute',
                                right:'-40px',
                                top:'-20px',
                                border:'4px solid var(--background-color)',
                                boxShadow:'0 10px 20px rgba(0,0,0,0.3)',
                            }}/>
                            <Box sx={{p:1,
                                paddingTop:14,
                            position:'relative'}}>
                                <Typography
                                variant='p'
                                fontWeight='700'
                                fontSize='15px'
                                color='var(--background-color)'>
                                    {item.title}
                                </Typography>
                                <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <Rating
                                        name="text-feedback"
                                        value={5}
                                        readOnly
                                        precision={0.5}
                                        sx={{fontSize:'14px'}}
                                        emptyIcon={
                                        <StarIcon
                                        style={{ opacity: 0.55,}}
                                        fontSize="inherit" />}
                                    />
                                    <Typography
                                    sx={{ ml: 1,
                                    fontSize:'14px',
                                    color:'gray' }}>
                                        {item.rating}
                                    </Typography>
                                </Box>
                                <Box sx={{mt:2,
                                    display:'flex',
                                    justifyContent:'space-between',
                                    alignItems:'center'
                                }}>
                                    <Typography
                                    variant='p'
                                    fontWeight='700'>
                                        {item.price}
                                    </Typography>
                                    <Button
                                    variant='contained'
                                    sx={{padding:0.8,
                                        boxShadow:'none',
                                        background:'var(--button-color)',
                                        color:'#fff',
                                        fontWeight:'700',
                                        textTransform:'capitalize',
                                        borderRadius:'50px',
                                        "&:hover":{
                                            background:'var(--button-hover-color)',
                                            color:'#fff',
                                        }
                                    }}>
                                        Buy Now
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
                
            </Box>
        </Box>
  
  )
}

export default Menu
