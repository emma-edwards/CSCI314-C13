import * as React from "react";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import map1 from '../images/map2.PNG';
import map2 from '../images/map3.PNG';

const open = [
    {
        id: 1,
        address: '13 road street Wollongong',
        customer: 'John',
        cType: 'Battery flat',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
]

const past = [
    {
        id: 2,
        address: '5 lake road Wollongong',
        customer: 'Mary',
        cType: 'Flat tyre',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
]

const CalloutHistory = () => {
    const cancel = (itemID) => {
        if(window.confirm("Would you like to cancel this callout?")) {
            console.log("Completed: " + itemID)
        }
    }

    return (
        <Container>
            <h1>Open Callouts</h1>

            {open.map((item, index) => (
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
                            <img src={map2} height={"200px"} />
                            <Typography sx={{ color: 'text.secondary' }}>submitted by: {item.customer}</Typography>
                            <Typography>{item.details}</Typography>
                            <Button onClick={() => cancel(item.id)}>
                                Cancel
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </>
            ))}

            <br/>
            <h1>Past Callouts</h1>

            {past.map((item, index) => (
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
                            <img src={map2} height={"200px"} />
                            <Typography sx={{ color: 'text.secondary' }}>submitted by: {item.customer}</Typography>
                            <Typography>{item.details}</Typography>
                            <Button onClick={() => cancel(item.id)}>
                                Cancel
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </>
            ))}

        </Container>
    );


};

export default CalloutHistory;