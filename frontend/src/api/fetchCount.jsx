import axios from 'axios';

export const fetchCount = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/visitor/count`);
    console.log(response.data.count);
    return response.data.count; // 데이터는 response.data 안에 들어있습니다.
  } catch (e) {
    console.error(e);
    return null;
  }
}

