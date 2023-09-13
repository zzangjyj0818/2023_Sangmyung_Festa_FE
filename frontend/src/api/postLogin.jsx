import axios from 'axios';

export const login = async ({ username, password }) => {

  const url = 'https://0031fec4-a52c-4b21-a961-fc0c19b07a45.mock.pstmn.io'
  const response = await axios.post(`${url}/api/login`, { username, password });
  return response.data.success;
};
