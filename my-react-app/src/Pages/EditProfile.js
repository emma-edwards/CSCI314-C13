/*
 Edit user info
*/
import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";

export default function EditProfile() {
    /*
    This page's ui is modified using mui library.
    */
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[phoneNumber,setPhoneNumber]=useState('')
    const[DOB,setDOB]=useState('')
    const[email,setEmail]=useState('')
    const[password,SetPassword]=useState('')

    const checkTextInput = (e) => {
        if (!firstName.trim()) {
            alert('Please enter your first name');
            window.location.href = '/EditProfile'
        }else if (!lastName.trim()) {
            alert('Please enter your last name');
            window.location.href = '/EditProfile'
        }else{
            handleClick(e);
        }
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const customer={firstName, lastName, phoneNumber, DOB, email, password}
        console.log(customer)
        fetch("",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify()
        }).then(()=>{
            console.log("Personal Profile Updated")
            window.location.href = '/MemberHome'
        })
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Edit Personal Profile
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        fullWidth
                        autoComplete="first name line"
                        variant="standard"
                        onChange={(e)=>setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="lastName"
                        name="lasrName"
                        label="lasrtName"
                        fullWidth
                        autoComplete="last name line"
                        variant="standard"
                        onChange={(e)=>setLastName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email line"
                        variant="standard"
                        onChange={(e)=>setDOB(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="contactNumber"
                        name="contactNumber"
                        label="Contact Number"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        onChange={(e)=>SetPassword(e.target.value)}
                    />
                </Grid>
               
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}
                onClick={checkTextInput}>
                    Save Changes
                </Button>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Cancel 
                </Button>
            </Grid>
        </React.Fragment>
    );
}