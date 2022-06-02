import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import { Container, Radio, FormControl, FormLabel, RadioGroup, Dialog, DialogActions, DialogContent, DialogContentText, 
    DialogTitle} from '@mui/material';
import { useRadioGroup } from '@mui/material/RadioGroup';


export default function EditMembership() {
    /*
    This page's ui is modified using mui library.
    */
    
    const[value,setValue]=useState('')
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        window.location.href = '/MemberHome';
    };

    const handleClick=(e)=>{
        e.preventDefault()
        // const membership={address1, address2, city, state, postalCode, country}
        // console.log(membership)
        // fetch("http://localhost:8080/membership/addMembership",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(membership)
        // }).then(()=>{
        //     console.log("Membership added")
        //     window.location.href = '/MemberHome'
        // })
        if(value === 'Cancle membership'){
            handleClickOpen();
        } else {
            // navigated to the payment page.
            window.location.href='/Payment';
        }
    }

    return (
        <React.Fragment>
            <Container>
                <Typography variant="h6" gutterBottom>
                    Edit membership
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <FormControl>
                        <FormLabel id="editMemberGroup">Update policy</FormLabel>
                        <RadioGroup
                            aria-labelledby="editMemberGroup"
                            name="radio-buttons-group"
                            value={value}
                            onChange={(e)=>setValue(e.target.value)}
                        >
                            <FormControlLabel value="Renew membership" control={<Radio />} label="Renew" />
                            <FormControlLabel value="Cancle membership" control={<Radio />} label="Cancle" />
                        </RadioGroup>
                    </FormControl>
                    </Grid>

                    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}
                    onClick={handleClick}>
                        Save Changes
                    </Button>
                    <div>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Do you want to cancle the policy?"}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                By click the Yes button, your vehicle will not longer have benefits of this roadside assistance policy, but you can still call for roadside assistance service by will need to pay onsite.
                                Are you sure you wants to lost those benefits?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={handleClose} autoFocus>
                                Yes
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Cancel Membership
                    </Button> */}
                </Grid>
            </Container>
        </React.Fragment>
    );
}