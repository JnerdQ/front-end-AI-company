import './App.css';
import LoginPage from './components/LoginPage';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import NotFoundPage from './components/NotFoundPage'; // Importa tu componente NotFoundPage

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/employee" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Ruta catch-all para 404 */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
