import { useState } from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";
import Container from "@mui/material/Container";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SubmitClaim() {
    const[sNumber,setsNumber]=useState('')
    const[streetName,setStreetName]=useState('')
    const[suburb,setSuburb]=useState('')
    const[report,setReport]=useState('')

    const checkTextInput = (e) => {
        if (!streetName.trim()) {
            alert('Please Enter Street Name'); 
            window.location.href = '/submitClaim'
        }else if (!sNumber.trim()) {
            alert('Please Enter Street Number');
            window.location.href = '/submitClaim'
        }else if (!suburb.trim()) {
                alert('Please Enter Suburb');
                window.location.href = '/submitClaim'
        }else if (!report.trim()) {
                    alert('Please Enter Notes about the claim');
                    window.location.href = '/submitClaim'
        }else{
            handleClick(e);
        }
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const request={sNumber, streetName, suburb, report}
        console.log(request)
        fetch("http://localhost:8080/request/addRequest",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(request)
        }).then(()=>{
            console.log("Request added")
            window.location.href = '/CalloutHistory'
        })
    }

    return (
        <React.Fragment>
            <Container>
            <Typography variant="h6" gutterBottom>
                Submit callout
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="sNumber"
                        name="sNumber"
                        label="Street Number"
                        variant="standard"
                        fullWidth
                        onChange={(e)=>setsNumber(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField
                        required
                        id="Street"
                        name="Street"
                        label="Street"
                        variant="standard"
                        fullWidth
                        onChange={(e)=>setStreetName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="Suburb"
                        name="Suburb"
                        label="Suburb"
                        variant="standard"
                        fullWidth
                        onChange={(e)=>setSuburb(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl>
                        <FormLabel id="type-radio-buttons-group-label">Request type</FormLabel>
                        <RadioGroup
                            aria-labelledby="type-radio-buttons-group-label"
                            defaultValue="tyre"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="tyre" control={<Radio />} label="Flat Tyre" />
                            <FormControlLabel value="battery" control={<Radio />} label="Battery" />
                            <FormControlLabel value="engine" control={<Radio />} label="Engine Problem" />
                            <FormControlLabel value="fuel" control={<Radio />} label="Need Fuel" />
                            <FormControlLabel value="key" control={<Radio />} label="Key Recovery" />
                            <FormControlLabel value="tow" control={<Radio />} label="Need Towing" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
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
                        onChange={(e)=>setReport(e.target.value)}
                    />
                </Grid>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}
                onClick={checkTextInput}>
                    Submit Callout
                </Button>
            </Grid>
            </Container>
        </React.Fragment>
    )
};
