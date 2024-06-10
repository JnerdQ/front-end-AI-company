import axios from './AxiosConfig';

export const fetchEmployees = async () => {
  const response = await axios.get('/employee');
  return response.data;
};

export const createEmployee = async (employeeData) => {
  const response = await axios.post('/employee', employeeData);
  return response.data;
};


export const authenticate = async (loginData) => {
  const response = await axios.post('/employee/authenticate', loginData);
  return response.data;
};
