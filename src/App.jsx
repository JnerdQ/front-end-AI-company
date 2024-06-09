import './App.css'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import EmployeeForm from './components/Profile'
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
function App() {

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
     {/* <LoginPage /> */}
      <HomePage /> 
      {/* <EmployeeForm />   */}
  </ThemeProvider>
 
  )
}

export default App
