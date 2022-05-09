import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";

export default function EditMembership() {
    const[address1,setAddress1]=useState('')
    const[address2,setAddress2]=useState('')
    const[city,setCity]=useState('')
    const[state,setState]=useState('')
    const[postalCode,setPostalCode]=useState('')
    const[country,setCountry]=useState('')

    const checkTextInput = (e) => {
        if (!address1.trim()) {
            alert('Please Enter Address 1'); 
            window.location.href = '/EditMembership'
        }else if (!address2.trim()) {
            alert('Please Enter Address 2');
            window.location.href = '/EditMembership'
        }else{
            handleClick(e);
        }
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const membership={address1, address2, city, state, postalCode, country}
        console.log(membership)
        fetch("http://localhost:8080/membership/addMembership",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(membership)
        }).then(()=>{
            console.log("Membership added")
            window.location.href = '/MemberHome'
        })
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Edit membership
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={(e)=>setAddress1(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                        onChange={(e)=>setAddress2(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        onChange={(e)=>setCity(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>setState(e.target.value)}
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
                        onChange={(e)=>setPostalCode(e.target.value)}
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
                        onChange={(e)=>setCountry(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}
                onClick={checkTextInput}>
                    Save Changes
                </Button>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Cancel Membership
                </Button>
            </Grid>
        </React.Fragment>
    );
}