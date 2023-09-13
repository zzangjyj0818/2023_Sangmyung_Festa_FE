import axios from 'axios';

export const fetchBoxState = async () => {
    const url = 'https://0031fec4-a52c-4b21-a961-fc0c19b07a45.mock.pstmn.io';
    try {
      const response = await axios.get(`${url}/box`);
      return response.data; // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      console.error(e);
      return null;
    }
}
