import React, { useState } from 'react'
import {Box, Typography, Button, Grid} from '@mui/material';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Controller, useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--background-color)',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  };

const Reservation = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const schema = yup.object().shape({
        firstname : yup.string().required('This field is required'),
        lastname: yup.string().required('This field is required'),
        email: yup.string().email('Invalid format').required('This field is required'),
        date: yup
        .date()
        .min(new Date(), "Date must be greater than today")
        .required('Please select a date'),
        time: yup.date().required('Time is required'),
        adults:yup.number().required('Please select number of adults'),
        childrens: yup.number().required('Please select number of children'),
        phone: yup
        .string()
        .required('This field is required')
        .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
        guests: yup.string()
    })

    const {handleSubmit, control, formState:{errors}, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues:{
            firstname: '',
            lastname:'',
            email:'',
            date: null,
            time: null,
            adults:null,
            childrens:null,
            guests:''
        }
    })

    const onsubmit = (data)=>{
        console.log(data)
        setOpen(true)
        reset();
    }

  return (
    <Box sx={{mt:2,p:1,
        display:'flex',
        justifyContent:'center',
        background:'#edefee',
        borderRadius:5,
    }}>
        <Box sx={{
            position: 'relative',
            width: {md:600,sm:500,xs:500,},
            p: 4,
            background:'#fff',
            borderRadius:3,}}>
            <Typography id="modal-modal-title" variant="h4">
                Personal Details
            </Typography>
            <Typography>
                Fill out the details
            </Typography>

            <Box
            component='form'
            onSubmit={handleSubmit(onsubmit)}
            sx={{mt:2}}
            >
                <Grid container spacing={2}>

                    <Grid item md={6} sm={6} xs={6}>
                        <Typography>
                            Date <span style={{color:'red'}}>*</span>
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                        name='date'
                        control={control}
                        defaultValue=''
                        render={({field})=>(
                            <DatePicker
                            sx={{width:'100%'}}
                            {...field}/>
                        )} />
                        <FormHelperText sx={{color:'#e06b6b'}}>{errors.date?.message}</FormHelperText>
                        </LocalizationProvider>
                    </Grid>

                    <Grid item md={6} sm={6} xs={6}>
                        <Typography>
                            Time <span style={{color:'red'}}>*</span>
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                        name='time'
                        control={control}
                        defaultValue=''
                        render={({field})=>(
                            <TimePicker
                            sx={{width:'100%'}}
                            {...field}
                            ampm={true}
                            error={!!errors.date}
                            />
                        )} />
                        <FormHelperText sx={{color:'#e06b6b'}}>{errors.time?.message}</FormHelperText>
                        </LocalizationProvider>

                    </Grid>

                    <Grid item md={6} sm={6} xs={6}>
                        <Typography>
                            Adults <span style={{color:'red'}}>*</span>
                        </Typography>
                        <Controller 
                        name='adults'
                        control={control}
                        render={({field})=>(
                            <Select
                            {...field}
                            fullWidth
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>One</MenuItem>
                                <MenuItem value={2}>Two</MenuItem>
                                <MenuItem value={3}>Three</MenuItem>
                                <MenuItem value={4}>Four</MenuItem>
                                <MenuItem value={5}>Five +</MenuItem>
                            </Select>
                        )}/>
                        <FormHelperText sx={{color:'#e06b6b'}}>{errors.adults?.message}</FormHelperText>
                    </Grid>

                    <Grid item md={6} sm={6} xs={6}>
                        <Typography>
                            Children <span style={{color:'red'}}>*</span>
                        </Typography>
                        <Controller 
                        name='childrens'
                        control={control}
                        render={({field})=>(
                            <Select
                            {...field}
                            fullWidth
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>One</MenuItem>
                                <MenuItem value={2}>Two</MenuItem>
                                <MenuItem value={3}>Three</MenuItem>
                                <MenuItem value={4}>Four</MenuItem>
                                <MenuItem value={5}>Five +</MenuItem>
                            </Select>
                        )}/>
                        <FormHelperText sx={{color:'#e06b6b'}}>{errors.childrens?.message}</FormHelperText>
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <Typography>
                            Firstname <span style={{color:'red'}}>*</span>
                        </Typography>
                        <Controller
                        name='firstname'
                        control={control}
                        render={({field})=>(
                            <TextField
                            {...field}
                            error={!!errors.firstname}
                            helperText={errors.firstname?.message}
                            fullWidth
                            variant='outlined'
                            type='text'
                            placeholder='Enter first name'/>
                        )}/>
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <Typography>
                            Lastname <span style={{color:'red'}}>*</span>
                        </Typography>
                        <Controller
                        name='lastname'
                        control={control}
                        render={({field})=>(
                            <TextField
                            {...field}
                            error={!!errors.lastname}
                            helperText={errors.lastname?.message}
                            fullWidth
                            variant='outlined'
                            type='text'
                            placeholder='Enter last name'/>
                        )}/>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                        <Typography>
                            Email <span style={{color:'red'}}>*</span>
                        </Typography>
                        <Controller
                        name='email'
                        control={control}
                        render={({field})=>(
                            <TextField
                            {...field}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            fullWidth
                            variant='outlined'
                            type='email'
                            placeholder='Enter email'/>
                        )}/>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                        <Typography>
                            Phone <span style={{color:'red'}}>*</span>
                        </Typography>
                        <Controller
                        name='phone'
                        control={control}
                        render={({field})=>(
                            <TextField
                            {...field}
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            fullWidth
                            variant='outlined'
                            type='tel'
                            placeholder='Enter mobile number'/>
                        )}/>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                        <Typography>
                            Special Guests <span>(Optional)</span>
                        </Typography>
                        <Controller
                        name='guests'
                        control={control}
                        render={({field})=>(
                            <TextField
                            {...field}
                            error={!!errors.guests}
                            helperText={errors.guests?.message}
                            multiline
                            rows={2}
                            fullWidth
                            variant='outlined'
                            type='text'
                            />
                        )}/>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                        <FormControlLabel
                        control={
                        <Checkbox checked={true}/>
                        }
                        label="I agree with the Litle Lemon's Reservation Policy"
                        />
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                        <Button
                        type='submit'
                        onClick={handleSubmit}
                        variant='contained'
                        sx={{
                            width:{md:100,sm:'100%',xs:'100%'},
                            background:'var(--button-color)',
                            color:'#000',
                            "&:hover":{
                                background:'var(--button-hover-color)',
                            },
                        }}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>

        {/* RESERVATION SUCCES MODAL */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box
            sx={{p:1,
                background:'var(--button-color)',
                borderRadius:'50%',
            }}>
                <DoneAllIcon/>
            </Box>
          <Typography variant="h6" component="h2">
            Table Reserved
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Your Reservation Requirements was Succesfully Submitted!
          </Typography>

          <Box
          sx={{mt:1,
            display:'flex',
            justifyContent:'center',
            gap:1,    }}>
            <Button
            onClick={handleClose}
            sx={{
                background:'var(--button-color)',
                color:'#000',
                "&:hover":{
                    background:'var(--button-hover-color)',
                },
            }}>
                Reserve More
            </Button>
            <Button
            onClick={()=>navigate('/')}
            sx={{
                background:'var(--button-color)',
                color:'#000',
                "&:hover":{
                    background:'var(--button-hover-color)',
                },
            }}>
                Go Back Home
            </Button>
          </Box>
        </Box>
        </Modal>

    </Box>
  )
}

export default Reservation
