import axios from 'axios';

export const postBoxState = async ({idx}) => {
  const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/treasure_toggle/${idx}`, {});
  return response.data.response;
};
