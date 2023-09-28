import axios from 'axios';

export const login = async ({ userid, userpw }) => {
  console.log('Username:', userid);
  console.log('Password:', userpw);
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/admin_member/login`, { userid, userpw });
  return response.data.response;
};
