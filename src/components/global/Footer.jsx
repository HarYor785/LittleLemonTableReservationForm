import React from 'react'
import {Box, Button, Typography} from '@mui/material';
import Logo from '../../assets/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TextField from '@mui/material/TextField';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


const Footer = () => {
  return (
    <Box sx={{
        mt:5,
        background:'#658077',
        width:'100%',
        p:4,}}>
      <Box sx={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
      }}>

        <Box sx={{
            mt:{md:0.2,},
            minWidth:300,}}>
            <img
            src={Logo}
            alt="Logo"
            width={200}
            style={{marginBottom:2,}} />
            <Typography
            variant='body2'
            fontSize='12px'
            color='#dcdcdc'
            sx={{mb:3}}>
                We are a family own mediterranean restaurant, focuse on<br/>
                traditional, recipes served with a modern twist.
            </Typography>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                gap:2,
            }}>
                <Box sx={{
                    p:0.5,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    background:'var(--button-color)',
                    borderRadius:'50%'
                }}>
                    <FacebookIcon
                    sx={{
                        color:'#fff',
                        }}/>
                </Box>
                <Box sx={{
                    p:0.5,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    background:'var(--button-color)',
                    borderRadius:'50%'
                }}>
                    <TwitterIcon
                    sx={{
                        color:'#fff',
                        }}/>
                </Box>
                <Box sx={{
                    p:0.5,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    background:'var(--button-color)',
                    borderRadius:'50%'
                }}>
                    <InstagramIcon
                    sx={{
                        color:'#fff',
                        }}/>
                </Box>
                <Box sx={{
                    p:0.5,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    background:'var(--button-color)',
                    borderRadius:'50%'
                }}>
                    <YouTubeIcon
                    sx={{
                        color:'#fff',
                        }}/>
                </Box>
            </Box>
        </Box>

        <Box sx={{
            mt:{md:0.2,sm:3,xs:5},
            minWidth:300,
            textAlign:{
                md:'center',
                sm:'left',
                xs:'left'
            }}}>
            <Typography
            variant='h1'
            fontSize='18px'
            fontWeight='900'
            color='#fff'
            sx={{mb:3}}>
                Helpful Links
            </Typography>
            <Box>
                <Typography
                color='#dcdcdc'
                sx={{cursor:'pointer',p:0.2,
                    transition:'all 300ms ease',
                    "&:hover":{color:'#fff'}}}>
                    About Us
                </Typography>
                <Typography
                color='#dcdcdc'
                sx={{cursor:'pointer',p:0.2,
                    transition:'all 300ms ease',
                    "&:hover":{color:'#fff'}}}>
                    Menu
                </Typography>
                <Typography
                color='#dcdcdc'
                sx={{cursor:'pointer',p:0.2,
                    transition:'all 300ms ease',
                    "&:hover":{color:'#fff'}}}>
                    User's Guide
                </Typography>
                <Typography
                color='#dcdcdc'
                sx={{cursor:'pointer',
                    transition:'all 300ms ease',
                    "&:hover":{color:'#fff'}}}>
                    Term & Conditions
                </Typography>
            </Box>
        </Box>

        <Box sx={{
            mt:{md:0.2,sm:3,xs:5},
            minWidth:300,}}>
            <Typography
            variant='h1'
            fontSize='18px'
            fontWeight='900'
            color='#fff'
            sx={{mb:1}}>
                Contact Info
            </Typography>
            <Box>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    gap:2,
                }}>
                    <Box sx={{
                        p:0.5,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        background:'var(--button-color)',
                        borderRadius:'50%'
                    }}>
                        <HomeIcon
                        sx={{
                            color:'#fff',
                            }}/>
                    </Box>
                    <Box>
                        <Typography
                        variant='body2'
                        fontSize='12px'
                        fontWeight='700'
                        sx={{color:'var(--button-hover-color)'}}>
                            Adress
                        </Typography>
                        <Typography
                        variant='body2'
                        color='#dcdcdc'>
                            2602 Carriage Lane
                            Pittston, PA 18640
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{mt:0.5,
                    display:'flex',
                    alignItems:'center',
                    gap:2,
                }}>
                    <Box sx={{
                        p:0.5,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        background:'var(--button-color)',
                        borderRadius:'50%'
                    }}>
                        <CallIcon
                        sx={{
                            color:'#fff',
                            }}/>
                    </Box>
                    <Box>
                        <Typography
                        variant='body2'
                        fontSize='12px'
                        fontWeight='700'
                        sx={{color:'var(--button-hover-color)'}}>
                            Phone No
                        </Typography>
                        <Typography
                        variant='body2'
                        color='#dcdcdc'>
                            +1570-225-7620
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{mt:0.5,
                    display:'flex',
                    alignItems:'center',
                    gap:2,
                }}>
                    <Box sx={{
                        p:0.5,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        background:'var(--button-color)',
                        borderRadius:'50%'
                    }}>
                        <EmailIcon
                        sx={{
                            color:'#fff',
                            }}/>
                    </Box>
                    <Box>
                        <Typography
                        variant='body2'
                        fontSize='12px'
                        fontWeight='700'
                        sx={{color:'var(--button-hover-color)'}}>
                            Mail
                        </Typography>
                        <Typography
                        variant='body2'
                        color='#dcdcdc'>
                            support@littlelemon.com
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>

        <Box sx={{
            mt:{md:0.2,sm:3,xs:5},
            minWidth:300,}}>
            <Typography
            variant='h1'
            fontSize='18px'
            fontWeight='900'
            color='#fff'
            sx={{mb:2}}>
                NewsLetter
            </Typography>
            <Box>
                <Typography
                variant='body2'
                color='gainsboro'
                fontSize='12px'>
                Join our newsletter community to receive<br/> the latest updates,
                 exclusive offers,<br/> mouthwatering recipes,
                from Little <br/>Lemon restaurant
                </Typography>
                <Box sx={{p:1,mt:1,
                    display:'flex',
                    alignItems:'center',
                    border:'1px solid var(--button-hover-color)',
                    height:40,
                }}>
                    <input type="text"
                    placeholder='Subscribe' />
                    <TrendingFlatIcon
                    sx={{p:0.5,mr:'-10px',
                        background:'var(--button-hover-color)',
                        color:'#fff',
                        width:40,
                        height:40,
                        cursor:'pointer',
                        }}/>
                </Box>
            </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Footer
