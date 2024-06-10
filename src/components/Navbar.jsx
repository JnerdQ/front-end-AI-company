import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Factored AI
          </Typography>
          <Button color="inherit" to="/login">
            ABOUT US
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
