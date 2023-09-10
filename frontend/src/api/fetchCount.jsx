import axios from 'axios';

export const fetchCount = async ({setError, setCount, setLoading}) => {
    const url = 'https://1e79b09b-389e-486b-8d9a-ccc7885a72ce.mock.pstmn.io/';
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setCount(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        `${url}/api/visitor/count`
      );
      setCount(response.data.count); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
}
