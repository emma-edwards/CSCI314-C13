import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import {Link as RouterLink} from "react-router-dom";
import Welcome from "../Components/Welcome";

const welcome = {
    title: 'Welcome, Member!',
    description:
        "What can we help with today?",
    image: 'https://source.unsplash.com/random',
};


const MemberHome = () => {
    return (
        <Container>

            <Welcome post={welcome} />

            <Box sx={{ flexGrow:1 }}>

                <Grid container columns={6} spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Need help?
                                    </Typography>
                                    <Typography variant="body2">
                                        Submit a callout to a Roadside assistance professional
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <RouterLink to="/SubmitClaim">
                                        <Button
                                            type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                        >
                                            Submit callout</Button>
                                    </RouterLink>
                                    <RouterLink to="/ServiceReport">
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Service Report</Button>
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
                                        Check your membership information, edit your payment types, or your vehicle registration
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <RouterLink to="/EditMembership">
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >Edit Membership</Button>
                                    </RouterLink>
                                    <RouterLink to="/VehicleReg">
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Vehicle Registration</Button>
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
                                        Leave a review?
                                    </Typography>
                                    <Typography variant="body2">
                                        Please leave a review about Roadside assistance professional work
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <RouterLink to="/ReviewNRating">
                                        <Button
                                            type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                                >
                                            Reviews</Button>
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

export default MemberHome;