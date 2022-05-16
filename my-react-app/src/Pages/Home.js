import { Outlet, Link as RouterLink } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import motorist from '../images/motorist.jpg';
import mechanic from '../images/mechanic.jpg';

const Home = () => {
    return (
        <>
            <Container>
            <h1>Roadside Assistance Service</h1>

            {/*<RouterLink to="/SignIn">Customer Sign In</RouterLink>
            <br />
            <RouterLink to="/SignUp">Customer Sign Up</RouterLink>
            <br />
            <RouterLink to="/ProfessionalReg">Professional Registration</RouterLink>
            <br />*/}
            <RouterLink to="/SignIn">
                <Button variant="contained">
                    Sign in
                </Button>
            </RouterLink>

            <br /> <br /> <br />

            <Box sx={{ flexGrow:1 }}>

                <Grid container columns={6} spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={motorist}
                                    alt="motorist"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Motorist
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Sign up to the roadside assistance service.
                                        Get unlimited callouts with a subscription,
                                        or sign up for free and pay as you go
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <RouterLink to='/SignUp'>
                                        <Button>Sign up</Button>
                                    </RouterLink>
                                </CardActions>
                            </Card>
                        </item>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={mechanic}
                                    alt="Mechanic"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Roadside Assistance Professional
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Apply to become a roadside assistance professional
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <RouterLink to='/ProfessionalReg'>
                                        <Button>Sign up</Button>
                                    </RouterLink>
                                </CardActions>
                            </Card>
                        </item>
                    </Grid>
                </Grid>

            </Box>

           {/* <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sign up to the roadside assistance service.
                        Get unlimited callouts with a subscription,
                        or sign up for free and pay as you go
                    </Typography>
                </CardContent>
                <CardActions>
                    <RouterLink to='/SignUp'>
                        <Button>Sign up</Button>
                    </RouterLink>
                </CardActions>
            </Card>


            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Apply to become a roadside assistance professional
                    </Typography>
                </CardContent>
                <CardActions>
                    <RouterLink to='/ProfessionalReg'>
                        <Button>Sign up</Button>
                    </RouterLink>
                </CardActions>
            </Card>*/}



            <Outlet />

            </Container>

        </>
    )

};

export default Home;