import { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CssBaseline,
  Alert
} from '@mui/material';
import { authenticate } from '../api/EmployeeService'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null); 

    try {
        const response = await authenticate({ email, password });

        if(response){
            console.log('Login successful', response);
            navigate('/employee')
        }

      } catch (err) {
        console.error('Error during authentication', err);
        console.log('Login failed. Please check your credentials and try again.');
      }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src="src/assets/factored.png"
          alt="factored icon"
          style={{
            width: '50%',
            height: '50%',
            objectFit: 'contain',
          }}
        />
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            sx={{ mb: 2 }}
            InputProps={{
              sx: {
                borderRadius: '1rem',
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            sx={{ mb: 2 }}
            InputProps={{
              sx: {
                borderRadius: '1rem',
              },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 4 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
