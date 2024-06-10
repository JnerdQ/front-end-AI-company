import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar';

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleGoToLogin = () => {
    navigate('/login'); 
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <img
            src="src/assets/factored.png"
            alt="factored icon"
            style={{
              width: '25%',
              height: '25%',
              objectFit: 'contain',
            }}
          />
          <Typography variant="h3" gutterBottom m={5}>
            HomePage
          </Typography>
          <Button variant="contained" color="primary" onClick={handleGoToLogin}>
            Go to Login
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
