import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import GreekSalad from '../../assets/Greek-Salad.png'
import Bruschetta from '../../assets/bruschetta.png'
import LemonDesert from '../../assets/lemon-dessert.png'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'


const FeatureItems = [
    {
        title: 'Greek Salad',
        description:'Our Greek Salad is a vibrant medley of fresh ingredients. Crisp lettuce, juicy tomatoes, cucumbers, and red onions are tossed with Kalamata olives and creamy feta cheese, all drizzled with our house-made Greek dressing.',
        price: '$11.9',
        ratings:'4.5',
        img: (<CardMedia component='img' image={GreekSalad} alt='Greek Salad' sx={{height:150,}}/>),
        avatars:[
            (<CardMedia
                component='img'
                image={avatar1}
                alt='Avatar'
                sx={{ml:'-10px',
                width:30,
                height:30,
                borderRadius:'50%',}}/>),
            (<CardMedia
                component='img'
                image={avatar2}
                alt='Avatar'
                sx={{ml:'-10px',
                width:30,
                height:30,
                borderRadius:'50%',}}/>),
            (<CardMedia
                component='img'
                image={avatar3}
                alt='Avatar'
                sx={{ml:'-10px',
                width:30,
                height:30,
                borderRadius:'50%',}}/>),
        ]
    },
    {
        title: 'Bruschetta',
        description:'Experience the simplicity and elegance of our Bruschetta. Slices of crusty Italian bread are toasted to perfection and topped with ripe tomatoes, fresh basil, garlic, and a drizzle of extra-virgin olive oil',
        price: '$8.99',
        ratings:'4.7',
        img: (<CardMedia component='img' image={Bruschetta} alt='Greek Salad' sx={{height:150,}}/>),
        avatars:[
            (<CardMedia
                component='img'
                image={avatar3}
                alt='Avatar'
                sx={{ml:'-10px',
                width:30,
                height:30,
                borderRadius:'50%',}}/>),
            (<CardMedia
                component='img'
                image={avatar1}
                alt='Avatar'
                sx={{ml:'-10px',
                width:30,
                height:30,
                borderRadius:'50%',}}/>),
            (<CardMedia
                component='img'
                image={avatar2}
                alt='Avatar'
                sx={{ml:'-10px',
                width:30,
                height:30,
                borderRadius:'50%',}}/>),
        ]
    },
    {
        title: 'Greek Salad',
        description:'Our Lemon Dessert is a sweet and tangy masterpiece. Indulge in layers of luscious lemon-infused cake, each bite bursting with zesty citrus flavor.',
        price: '$7.99',
        ratings:'4.9',
        img: (<CardMedia component='img' image={LemonDesert} alt='Greek Salad' sx={{height:150,}}/>),
        avatars:[
            (<CardMedia
                component='img'
                image={avatar2}
                alt='Avatar'
                sx={{ml:'-10px',
                width:30,
                height:30,
                borderRadius:'50%',}}/>),
            (<CardMedia
                component='img'
                image={avatar3}
                alt='Avatar'
                sx={{ml:'-10px',
                width:30,
                height:30,
                borderRadius:'50%',}}/>),
            (<CardMedia
                component='img'
                image={avatar4}
                alt='Avatar'
                sx={{ml:'-10px',
                width:30,
                height:30,
                borderRadius:'50%',}}/>),
        ]
    },
    

]

export default FeatureItems