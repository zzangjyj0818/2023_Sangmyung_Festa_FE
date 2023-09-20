import axios from 'axios';

export const postTicket = async ({count}) => {
  const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/admin/festival/api/ticket_change/${count}`, {});
  return response.data.response;
};
