import React, { useEffect } from 'react'
import {Box, Typography, Button} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { blogItem } from './utils/blogItem';

const Blog = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

  return (
    <Box
    sx={{mt:3,p:5}}
    data-aos="zoom-out-up">
        <Typography
        variant='h4'
        fontWeight='600'
        color='var(--button-hover-color)'>
            Explore Our Blog
        </Typography>
        <Typography
        variant='body2'
        color='gray'>
            Dive into a world of culinary inspiration, 
            behind-the-scenes <br/>stories, and mouthwatering recipes.
        </Typography>

        <Box sx={{mt:5,
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center',
            gap:5,
        }}>
            {
                blogItem.map((item, i)=>(
                <Card key={i}
                sx={{ maxWidth: 345, height:350, }}>
                    <CardMedia
                        component="img"
                        alt={item.title}
                        height="160"
                        image={item.img}
                    />
                    <CardContent>
                        <Box sx={{
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'center'
                        }}>
                            <Typography
                            gutterBottom
                            variant="body2"
                            fontSize='12px'
                            sx={{display:'flex',
                            alignItems:'center'}}>
                                <CalendarMonthIcon
                                sx={{
                                    fontSize:'15px',mr:1,
                                    color:'var(--background-color)',
                                    }}/>
                                {item.date}
                            </Typography>

                            <Typography
                            gutterBottom
                            variant="body2"
                            fontSize='12px'
                            sx={{display:'flex',
                            alignItems:'center'}}>
                                <CommentIcon
                                sx={{
                                    fontSize:'15px',mr:1,
                                    color:'var(--background-color)',
                                    }}/>
                                {item.comments}
                            </Typography>
                        </Box>
                        <Typography
                        variant="h5"
                        fontWeight='700'>
                            {item.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                        size="small"
                        sx={{color:'var(--button-hover-color)'}}>
                            Read More
                            <KeyboardDoubleArrowRightIcon/>
                        </Button>
                    </CardActions>
                </Card>
                ))
            }
            
        </Box>
    </Box>
  )
}

export default Blog
