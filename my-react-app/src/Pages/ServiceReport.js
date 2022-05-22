/*
Fetch callout info from backend and generate report
*/
import * as React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const reportTheme = createTheme();

export default function ServiceReport()
{
    return(
        <React.Fragment>
            <ThemeProvider theme={reportTheme}>
                <Container>
                    <Typography variant="h4" gutterBottom>
                        <br/> Service Report
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Roadside Assist
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            Order Number:
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Date:
                        </Grid>
                        <Grid item xs={12}>
                            Customer Name:
                        </Grid>
                        <Grid item xs={12}>
                            Customer Email:
                        </Grid>
                        <Grid item xs={12}>
                            Address:
                        </Grid>
                        <Grid item xs={12}>
                            City:
                        </Grid>
                        <Grid item xs={12}>
                            State:
                        </Grid>
                        <Grid item xs={12}>
                            Post Code:
                        </Grid>
                        <Grid item xs={12} sm={6} //This cell displays membership status at time of callout
                        >
                            Call Status:
                        </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom>
                        <br/>Nature of Callout
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            Callout Information:
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Make:
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Model:
                        </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom>
                        <br/> Services Rendered
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            Professional Name:
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Professional Email:
                        </Grid>
                        <Grid item xs={12}>
                            Services Rendered:
                        </Grid>
                        <Grid item xs={12}>
                            Pricing:
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </React.Fragment>
    )
};