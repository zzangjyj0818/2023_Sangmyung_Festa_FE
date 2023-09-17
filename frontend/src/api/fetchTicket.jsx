import axios from 'axios';

export const fetchTicket = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/ticket`);
      console.log(response.data);
      return response.data.ticket; // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      console.error(e);
      return null;
    }
}