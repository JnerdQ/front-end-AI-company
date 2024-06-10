import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate('/home'); 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Factored AI
          </Typography>
          <Button color="inherit" to="/home" onClick={handleGoToHome}>
            ABOUT US
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
