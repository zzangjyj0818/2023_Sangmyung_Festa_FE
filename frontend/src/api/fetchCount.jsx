import axios from 'axios';

export const fetchCount = async ({setCount}) => {
    const url = 'https://1e79b09b-389e-486b-8d9a-ccc7885a72ce.mock.pstmn.io/';
    try {
      setCount(null);
      const response = await axios.get(
        `${url}/api/visitor/count`
      );
      setCount(response.data.count); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      console.error(e);
    }
}
