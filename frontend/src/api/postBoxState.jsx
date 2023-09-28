import axios from 'axios';

export const postBoxState = async ({idx}) => {
  const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/admin/festival/api/box_toggle/${idx}`, {});
  return response.data.response;
};
