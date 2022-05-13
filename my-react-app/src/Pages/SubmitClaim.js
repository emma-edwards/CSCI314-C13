import { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";

export default function SubmitClaim() {
    const[location,setLocation]=useState('')
    const[customerNotes,setCustomerNotes]=useState('')

    const checkTextInput = (e) => {
        if (!location.trim()) {
            alert('Please Enter Location'); 
            window.location.href = '/submitClaim'
        }else if (!customerNotes.trim()) {
            alert('Please Enter Notes');
            window.location.href = '/submitClaim'
        }else{
            handleClick(e);
        }
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const request={location, customerNotes}
        console.log(request)
        fetch("http://localhost:8080/request/addRequest",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(request)
        }).then(()=>{
            console.log("Request added")
            window.location.href = '/MemberHome'
        })
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Submit callout
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="location"
                        name="location"
                        label="Location"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="details"
                        name="details"
                        label="Incident Details"
                        fullWidth
                        variant="standard"
                        minRows={4}
                        multiline
                    />
                </Grid>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}
                onClick={checkTextInput}>
                    Submit Callout
                </Button>
            </Grid>
        </React.Fragment>
    )
};
