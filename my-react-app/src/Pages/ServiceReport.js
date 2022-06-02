/*
Fetch callout info from backend and generate report
*/
import * as React from 'react';
import { useState, useEffect} from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const reportTheme = createTheme();
const customerId = 1;
const requestId = 1;
const professionalId = 1;
const vehicleId= 1;

export default function ServiceReport()
{
    const [customer, setCustomer] = useState([{}])
    const [request, setRequest] = useState([{}])
    const [professional, setProfessional] = useState([{}])
    const [vehicle, setVehicle] = useState([{}])
    const [price, setPrice] = useState(0)

    const handleClick = () =>
    {
        window.location.href = "/MemberHome";
    }

    useEffect(() => {
        let price = ((Math.random() * (250 - 20 + 1)) + 20).toFixed(2);
        setPrice(price);
        console.log(price);
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/customer/getCustomer/${customerId}`) //Pulls specific customer from the server
            .then(response => {
                if (!response.ok) { //If the pull fails
                    alert('There are no customers');
                    throw response
                }
                return response.json()
            })
            .then(json=>{
                let customer = json;
                setCustomer(customer);
                console.log(customer);
            })
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/request/getRequest/${requestId}`) //Pulls specific request from the server
            .then(response => {
                if (!response.ok) { //If the pull fails
                    alert('There are no requests');
                    throw response
                }
                return response.json()
            })
            .then(json=>{
                let request = json;
                setRequest(request);
                console.log(request);
            })
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/professional/getProfessional/${professionalId}`) //Pulls specific professional from the server
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

    useEffect(() => {
        fetch(`http://localhost:8080/vehicle/getVehicle/${vehicleId}`) //Pulls specific vehicle from the server
            .then(response => {
                if (!response.ok) { //If the pull fails
                    alert('There are no vehicles');
                    throw response
                }
                return response.json()
            })
            .then(json=>{
                let vehicle = json;
                setVehicle(vehicle);
                console.log(vehicle);
            })
    }, []);

    return(
        <React.Fragment>
            <ThemeProvider theme={reportTheme}>
                <Container
                           sx={{
                               marginTop: 4,
                               marginBottom: 4,
                               alignItems: 'left',
                               boxShadow: 1,
                               padding: 2,
                               borderRadius: 1
                           }}
                >
                    <Typography variant="h4" gutterBottom>
                        Service Report
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Roadside Assist
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            Date: {new Date().toLocaleString() + ""}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Customer ID: {customer.id}
                        </Grid>
                        <Grid item xs={6}>
                            Customer Name: {customer.firstName} {customer.lastName}
                        </Grid>
                        <Grid item xs={6}>
                            Customer Email: {customer.email}
                        </Grid>
                        <Grid item xs={6}>
                            Customer Phone: {customer.phone}
                        </Grid>
                        <Grid item xs={12}>
                            Address: {request.sNumber} {request.streetName} {request.suburb}
                        </Grid>
                        <Grid item xs={12} sm={6} //This cell displays membership status at time of callout
                        >
                            Call Type: Subscription
                        </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom>
                        <br/>Nature of Callout
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            Callout Information: {request.report}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Make: {vehicle.vehicleMake}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Plate Number: {vehicle.plate}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Insurance: {vehicle.insuranceProvider}
                        </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom>
                        <br/> Services Rendered
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            Professional Name: {professional.firstName} {professional.lastName}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Professional Email: {professional.email}
                        </Grid>
                        <Grid item xs={6}>
                            Pricing: You're a member! We've got this one
                        </Grid>
                        <Grid item xs={6}>
                            Additional Parts: {price}
                        </Grid>
                    </Grid>
                </Container>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        mb: 5,
                        width: '30%',
                        marginLeft: '35%'
                }}
                    onClick={handleClick}
                    >
                    Return Home
                </Button>
            </ThemeProvider>
        </React.Fragment>
    )
};