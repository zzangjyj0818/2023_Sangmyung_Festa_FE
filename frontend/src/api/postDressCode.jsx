import axios from 'axios';

export const postDressCode = async ({idx}) => {
  const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/admin/festival/api/dress/${idx}`, {});
  return response.data.response;
};
