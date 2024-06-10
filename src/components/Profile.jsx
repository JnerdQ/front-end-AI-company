import  { useEffect, useState } from 'react';
import { Container, Typography,  Paper, Avatar, Grid, TextField } from '@mui/material';
import Navbar from './Navbar';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Profile = () => {
  const [employee, setEmployee] = useState(null);
  const avatarUrl = `https://api.dicebear.com/8.x/fun-emoji/svg?seed=${Math.random()}`;
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setEmployee(user);
    }
  }, []);

  if (!employee) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  const data = {
    labels: Object.keys(employee.skills),
    datasets: [
      {
        label: 'Skills',
        data: Object.values(employee.skills),
        backgroundColor: 'rgba(71, 183, 198, 0.5)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Employee Information
        </Typography>
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', textAlign: 'center', backgroundColor: 'rgba(162, 170, 173, 0.1)' }}>
          <Avatar
            alt={`${employee.name} ${employee.last_name}`}
            src={avatarUrl}
            sx={{ width: 100, height: 100, margin: 'auto' }}
          />
          <Grid item xs={12} container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                value={`${employee.name} ${employee.last_name}`}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                value={employee.email}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Position"
                fullWidth
                variant="outlined"
                value={employee.position}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Age"
                fullWidth
                variant="outlined"
                value={employee.age}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Active"
                fullWidth
                variant="outlined"
                value={employee.is_active ? 'Yes' : 'No'}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            Skills Radar
          </Typography>
          <Radar data={data} />
        </Paper>
      </Container>
    </>
  );
};

export default Profile;
