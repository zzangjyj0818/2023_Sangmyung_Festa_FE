import React, {useState} from 'react';
import { useMutation } from 'react-query';
import { login } from '../../../api/postLogin';
import '../../../styles/components/AdminPage/LoginModal.scss'

const LoginModal = ()  => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation(login);

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({ username, password });
  };

  return (
    <div className='LoginModal_Container'>
        <div className='LoginModal_Wrapper'>
            <div className='LoginModal_Wrapper_TopText'>
                <div>DEER FOR U: 비상</div>
                <div style={{marginTop : '8px'}}>관리자페이지</div>
            </div>
            <form onSubmit={handleSubmit} className='LoginModal_Form_Layout'>
                <label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder='ID'
                        className='LoginModal_Login'
                    />
                </label>
                <label>
                    <input 
                        type="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className='LoginModal_Password'
                    />
                </label>
                <button type="submit" className='LoginModal_SubmitBtn'>Log in</button>
                
                {mutation.isLoading && <p>로그인 중...</p>}
                {mutation.isError && <div>Server Error!!</div>}
                {mutation.isSuccess && <div>Logged in successfully!</div>}
            </form>
        </div>
    </div>

   );
}

export default LoginModal;
