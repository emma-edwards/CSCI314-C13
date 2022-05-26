import * as React from 'react';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import Toolbar from "@mui/material/Toolbar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import AppBar from "@mui/material/AppBar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import map2 from "../images/map3.PNG";

const professionalId = 1;

const data = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
        phone: '4975395',
        email: 'email@email.com',
        avRating: 3.5,
        jobsCompleted: 5
    },
    {
        id: 1,
        firstName: 'A',
        lastName: 'Jones',
        phone: '93459378',
        email: 'email@email.com',
        avRating: 4.0,
        jobsCompleted: 6
    }
]

const Admin = () => {
    const [professional, setProfessional] = useState([{}])

    /*useEffect(() => {
        fetch(`http://localhost:8080/professional/getProfessional/${professionalId}`) //Pulls specific customer from the server
            .then(response => {
                if (!response.ok) { //If the pull fails
                    alert('There are no professionals');
                    throw response
                }
                return response.json()
            })
            .then(json=>{
                let professional = json;
                setProfessional(professional);
                console.log(professional);
            })
    }, []);*/


    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <RouterLink to="/">
                        <Typography variant="h6" color="white" noWrap>
                            Log out
                        </Typography>
                    </RouterLink>

                </Toolbar>
            </AppBar>

            <Container>
                <h1>Manage Professionals</h1>

                {data.map((item, index) => (
                    <>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id={item.id}
                            >
                                <Typography sx={{ width: '60%' }}>{item.firstName + " " + item.lastName}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Phone number: {item.phone}</Typography>
                                <Typography>Email: {item.email}</Typography>
                                <Typography>Average rating: {item.avRating}</Typography>
                                <Typography>Jobs Completed: {item.jobsCompleted}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </>
                ))}
            </Container>
        </>
    )
};

export default Admin;