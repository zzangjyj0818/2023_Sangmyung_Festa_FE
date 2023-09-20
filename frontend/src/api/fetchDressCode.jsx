import axios from 'axios';

export const fetchDressCode = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/event/dress`);
      return response.data; // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      console.error(e);
      return null;
    }
}

