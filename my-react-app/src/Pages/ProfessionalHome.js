import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import * as React from "react";

const ProfessionalHome = () => {
    return (
        <Container>

            <h1>Welcome, Professional!</h1>

            <h3>What can we help with today?</h3>


            <Box sx={{ flexGrow:1 }}>

                <Grid container columns={6} spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Check Jobs
                                    </Typography>
                                    <Typography variant="body2">
                                        See callouts from customers near you, Or update the jobs you are working on
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <RouterLink to="/AvJobs">
                                        <Button size="small">Available jobs</Button>
                                    </RouterLink>
                                    <RouterLink to="/CurrentJobs">
                                        <Button size="small">Current jobs</Button>
                                    </RouterLink>
                                </CardActions>
                            </Card>
                        </item>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Check your details
                                    </Typography>
                                    <Typography variant="body2">
                                        Check and edit your profile information
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <RouterLink to="/EditProfile">
                                        <Button size="small">Profile</Button>
                                    </RouterLink>
                                </CardActions>
                            </Card>
                        </item>
                    </Grid>
                </Grid>

            </Box>


        </Container>
    );


};

export default ProfessionalHome;