import { Container, Alert, Card, CardContent, Button } from '@mui/material';

const PageNotFound = () => {
  return (
    <Container style={{ width: '100%', height: '100vh' }}>
      <Card style={{ width: '100%', marginTop: 100 }}>
        <Alert severity="error">THIS PAGE NOT FOUND</Alert>
        <CardContent>
          <div>PAGE YOU ARE TRYING TO ACCESS IS NOT AVAILABLE</div>
          <Button
            variant="text"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            {' '}
            Click Here
          </Button>{' '}
          to go to home page
        </CardContent>
      </Card>
    </Container>
  );
};

export default PageNotFound;
