import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";

const SubmitClaim = () => {
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
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Submit Callout
                </Button>
            </Grid>
        </React.Fragment>
    )
};

export default SubmitClaim;