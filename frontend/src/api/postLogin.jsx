import axios from 'axios';

export const login = async ({ username, password }) => {

  const url = 'https://b5a7d179-1cf6-49ed-80be-9342575e6646.mock.pstmn.io'
  const response = await axios.post(`${url}/api/login`, { username, password });
  return response.data.success;
};
