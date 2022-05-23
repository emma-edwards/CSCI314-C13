import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Alert,
} from "@mui/material";
import { Padding } from "@mui/icons-material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const steps = ["Payment Method", "Details", "Confirmation"];

function Payment() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [paymentMethod, setPaymentMethod] = React.useState("credit");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [expiry, setExpiry] = React.useState("2022/01/01");
  const [name, setName] = React.useState("");

  const isStepOptional = (step) => {
    return false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep == 2) {
      window.location.href = "/MemberHome";
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    throw new Error("You can't skip a step that isn't optional.");
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  const getStepContent = () => {
    if (activeStep == 0) {
      return (
        <FormControl style={{ padding: 20 }}>
          <FormLabel id="demo-radio-buttons-group-label">Select Payment Method</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={paymentMethod}
            name="radio-buttons-group"
            onChange={(value) => setPaymentMethod(value.target.value)}
          >
            <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
            <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
          </RadioGroup>
        </FormControl>
      );
    }

    if (activeStep == 1) {
      return (
        <Box
          style={{ padding: 20 }}
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            error={name.length == 0}
            label="Card Holder Name"
            value={name}
            onChange={(value) => setName(value.target.value)}
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              error={expiry.length == 0}
              onChange={(value) => setExpiry(value)}
              label="Expiry Date"
              inputFormat="yyyy/MM/dd"
              value={expiry}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            value={cardNumber}
            error={cardNumber.length == 0}
            onChange={(value) => setCardNumber(value.target.value)}
            fullWidth={true}
            label="Card Number"
            type="number"
            variant="outlined"
          />

          <TextField
            value={cvv}
            error={cvv.length == 0}
            onChange={(value) => setCvv(value.target.value)}
            label="CVV"
            type="number"
            variant="outlined"
          />
          <TextField label="Card Holder Name" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Expiry Date"
              inputFormat="yyyy/MM/dd"
              value={"2022/01/01"}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField fullWidth={true} label="Card Number" type="number" variant="outlined" />

          <TextField label="CVV" type="number" variant="outlined" />
        </Box>
      );
    }

    if (activeStep == 2) {
      return (
        <Box
          style={{ padding: 20 }}
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="success">Payment Successful</Alert>
          </Stack>
        </Box>
      );
    }
  };

  return (
    <Container style={{ padding: 20 }}>
      <Box sx={{ width: "60%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {getStepContent()}

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
}

export default Payment;
