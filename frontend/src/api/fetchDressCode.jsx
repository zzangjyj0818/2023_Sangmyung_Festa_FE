import axios from 'axios';

export const fetchDressCode = async () => {
    const url = 'https://b5a7d179-1cf6-49ed-80be-9342575e6646.mock.pstmn.io';
    try {
      const response = await axios.get(`${url}/dress`);
      return response.data; // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      console.error(e);
      return null;
    }
}

