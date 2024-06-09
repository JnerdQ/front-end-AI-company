import { Container, Grid, Typography, Paper, TextField } from "@mui/material";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const EmployeeForm = () => {
  const employee = {
    name: "Laura",
    last_name: "Smith",
    email: "laura@factored.ai",
    position: "Backend Developer",
    age: 28,
    is_active: true,
    skills: {
      Java: 9,
      Python: 8,
      Docker: 7,
      Kubernetes: 6,
      PostgreSQL: 8,
    },
  };

  const data = {
    labels: Object.keys(employee.skills),
    datasets: [
      {
        label: "Skills",
        data: Object.values(employee.skills),
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container component="main" maxWidth="md" sx={{mt:20}}>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Employee Information
        </Typography>
        <Grid item xs={12} container spacing={2}>
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
              value={employee.is_active ? "Yes" : "No"}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h6" component="h2" gutterBottom></Typography>
        <Radar data={data} />
      </Paper>
    </Container>
  );
};

export default EmployeeForm;
