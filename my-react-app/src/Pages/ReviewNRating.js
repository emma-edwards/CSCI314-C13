import * as React from 'react';
import ReactDOM from 'react-dom';
import Rating from '@mui/material/Rating';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

// Page is modified using Material UI library

function ReviewNRating() {
    return (
    <React.Fragment>
        <Container fixed={true}>
            <Typography variant="h6" gutterBottom>
                Review and rating
            </Typography>
            <TextareaAutosize
                minRows={4}
                aria-label="maximum height"
                placeholder="Insert review here maximum 50 words..."
                defaultValue=""
                style={{ width: 300 }}
            />
            <br />
            <Rating default={1} /><br />
            <Button href="/MemberHome" variant="outlined">Submit Review</Button>
        </Container>
    </React.Fragment>
  );
}

export default ReviewNRating;