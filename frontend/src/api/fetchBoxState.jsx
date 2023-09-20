import axios from 'axios';

export const fetchBoxState = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/event/box`);
      return response.data; // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      console.error(e);
      return null;
    }
}
