import axios from 'axios';

export const login = async ({ username, password }) => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/login`, { username, password });
  return response.data.response;
};
