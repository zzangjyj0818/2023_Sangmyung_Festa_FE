import axios from 'axios';

export const postTicket = async ({count}) => {

  const url = 'https://b5a7d179-1cf6-49ed-80be-9342575e6646.mock.pstmn.io'
  const response = await axios.patch(`${url}/ticket_change/${count}`, {});
  return response.data.response;
};
