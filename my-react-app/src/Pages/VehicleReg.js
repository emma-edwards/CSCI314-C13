import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";

export default function VehicleReg() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Vehicle Registration
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="plateNum"
                        name="plateNum"
                        label="Plate Number"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="vehicleMake"
                        name="vehicleMake"
                        label="Vehicle Make"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="price"
                        name="price"
                        label="Price"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="insuranceProvider"
                        name="insuranceProvider"
                        label="Insurance Provider"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Submit Registration
                </Button>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Edit Registration
                </Button>
            </Grid>
        </React.Fragment>
    );
}