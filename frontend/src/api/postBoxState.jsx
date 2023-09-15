import axios from 'axios';

export const postDressCode = async ({idx}) => {

  const url = 'https://b5a7d179-1cf6-49ed-80be-9342575e6646.mock.pstmn.io'
  const response = await axios.patch(`${url}/treasure_toggle/${idx}`, {});
  return response.data.response;
};
