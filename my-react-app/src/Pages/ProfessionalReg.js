import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from "react-router-dom";
import {useState} from "react";

    /*
    This page's ui is modified using mui library.
    */
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function ProfessionalReg() {
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[dob,setDob]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[yearsWorked,setYearsWorked]=useState('')
    const[password,setPassword]=useState('')

    const checkTextInput = (e) => {
        if (!firstName.trim()) {
            alert('Please Enter First Name');
            window.location.href = '/ProfessionalReg'
        }else if (!lastName.trim()) {
            alert('Please Enter Last Name');
            window.location.href = '/ProfessionalReg'
        }else if (!dob.trim()) {
            alert('Please Enter Date of birth');
            window.location.href = '/ProfessionalReg'
        }else if (!email.trim()) {
            alert('Please Enter Email');
            window.location.href = '/ProfessionalReg'
        }else if (!phone.trim()) {
            alert('Please Enter Phone');
            window.location.href = '/ProfessionalReg'
        }else if (!yearsWorked.trim()) {
            alert('Please Enter years worked');
            window.location.href = '/ProfessionalReg'
        }else if (!password.trim()) {
            alert('Please Enter Password');
            window.location.href = '/ProfessionalReg'
        }else{
            handleClick(e);
        }
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const signUp={firstName, lastName, dob, email, phone, yearsWorked, password}
        console.log(signUp)
        fetch("http://localhost:8080/professional/addProfessional",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(signUp)
        }).then(()=>{
            console.log("Professional added")
            window.location.href = '/ProfessionalHome'
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Professional Registration
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={(e)=>setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={(e)=>setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="dob"
                                    label="Date of birth"
                                    name="dob"
                                    onChange={(e)=>setDob(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone Number"
                                    name="phone"
                                    onChange={(e)=>setPhone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="yearsWorked"
                                    label="Years Worked as a professional"
                                    name="yearsWorked"
                                    onChange={(e)=>setYearsWorked(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={checkTextInput}
                        >
                            Sign Up
                        </Button>

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <RouterLink to="/SignIn" variant="body2">
                                    Already have an account? Sign in
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}