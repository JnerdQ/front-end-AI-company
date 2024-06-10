import axios from 'axios';

// por fines practicos no uso .env pero deberia ser asi
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Authorization': 'Bearer token' }
});

export default axiosInstance;
