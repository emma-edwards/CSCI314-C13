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

const professionalId = 1;

const Admin = () => {
    const [professional, setProfessional] = useState([{}])

    useEffect(() => {
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
    }, []);


    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <RouterLink to="/">
                        <Typography variant="h6" color="white" noWrap>
                            Home
                        </Typography>
                    </RouterLink>

                </Toolbar>
            </AppBar>

            <Container>


                <h1>Manage Professionals</h1>
            </Container>
        </>
    )
};

export default Admin;