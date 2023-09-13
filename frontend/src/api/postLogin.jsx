import axios from 'axios';

export const login = async ({ username, password }) => {
  const response = await axios.post('/api/login', { username, password });
  if (response.status !== 200) {
    throw new Error('Login failed');
  }
  return response.data;
};
