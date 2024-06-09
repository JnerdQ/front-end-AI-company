import { Container, Typography, Box, Button } from '@mui/material';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Factored
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            This is a simple homepage created with Material-UI.
          </Typography>
          <Button variant="contained" color="primary"  to="/login">
            Go to Login
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
