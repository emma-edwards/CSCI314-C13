import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Container from "@mui/material/Container";
import mapImg from '../images/map.png';
import Grid from "@mui/material/Grid";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalloutMap from '../Components/Map';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Marker} from "google-maps-react";


const data = [
    {
        id: 1,
        address: '13 road street Wollongong',
        customer: 'John',
        cType: 'Battery flat',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 2,
        address: '5 lake road Wollongong',
        customer: 'Mary',
        cType: 'Flat tyre',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 3,
        address: '100 highway road Wollongong',
        customer: 'Steve',
        cType: 'Engine issue',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
]




export default function AvJobs(){


    // const [open, setOpen] = React.useState(false);
    //
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    //
    // const handleClose = (acceptType, itemID) => {
    //     setOpen(false);
    // };
    //
    // const checkDialog = () => {
    //     handleClickOpen()
    // }


    const handleTake = (itemID) => {
        if (window.confirm("Do you want to take this job?")) {
            console.log('take job: ' + itemID);
        }
        window.location.href = '/CurrentJobs';

    }

    const handleClick=(e)=>{
        fetch(`http://localhost:8080/request/getAll`) //Pulls all requests from the server
            .then(response => {
                if (!response.ok){ //If the request fails, e.g. server is not running
                    alert('There are no requests');
                    throw response
                }
                return response.json() //Returns all the requests
                //You will need to work out hoe to get each specific variable from it
            })
            .then(json=>{
                console.log(json)//Prints the requests in the console log
            })
    }

    //const root = ReactDOM.createRoot(document.getElementById('root'));

    //root.render(element);

    return (
        <>
            <Container>
                <h1>Available jobs</h1>

                <Grid container columns={8} spacing={3}>
                    <Grid item xs={8} sm={4}>
                        <item>
                            <Box>
                                <CalloutMap
                                    location={{latitude: -34.414, longitude: 150.901}}
                                    style={{
                                        width: '35%',
                                        height: '350px',
                                        margin: '0',
                                        padding: '10px',
                                    }}
                                    initialCenter={{lat: -34.405, lng: 150.878}}
                                    zoom={13}
                                />
                            </Box>

                        </item>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <item>
                            <List>
                                {data.map((item, index) => (
                                    <>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id={item.id}
                                            >
                                                <Typography sx={{ width: '60%' }}>{item.address}</Typography>
                                                <Typography sx={{ color: 'text.secondary' }}>{item.cType}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography sx={{ color: 'text.secondary' }}>submitted by: {item.customer}</Typography>
                                                <Typography>{item.details}</Typography>
                                                <Button onClick={() => handleTake(item.id)}>
                                                    Take Job
                                                </Button>
                                            </AccordionDetails>
                                        </Accordion>
                                    </>
                                ))}

                            </List>
                        </item>
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, marginTop: 25}}
                    onClick={handleClick}>
                    Refresh Jobs
                </Button>

                {/*<Dialog
                    open={open}
                    onClose={handleClose(acceptType)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Accept Job?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to accept this job?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose(false)}>Disagree</Button>
                        <Button onClick={() => handleClose(true)} autoFocus>
                            Take Job
                        </Button>
                    </DialogActions>
                </Dialog>*/}

            </Container>

        </>

    );


};