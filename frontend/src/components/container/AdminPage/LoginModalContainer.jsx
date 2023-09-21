import React, {useState}  from 'react';
import { useMutation } from 'react-query';
import { login } from '../../../api/postLogin';
import { useNavigate } from 'react-router';
import LoginModal from '../../presentation/AdminPage/LoginModal';

const LoginModalContainer = ({isOpen, setIsOpen}) => {
    const navigate = useNavigate();
    const [userid, setUserId] = useState('');
    const [userpw, setUserPw] = useState('');

    const mutation = useMutation(login ,{
        onSuccess: (data) => {
            if(data === 200){
                console.log(data);
                setIsOpen(!isOpen);
            } else {
                console.log(data);
                alert('로그인 실패');
                navigate('/');
            }
        },
        onError: () => {
            navigate('/');
        }
      });
      
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', userid);
        console.log('Password:', userpw);
        mutation.mutate({ userid, userpw });
    };
    return (
        <LoginModal 
            handleSubmit={handleSubmit}
            username={userid}
            setUsername={setUserId}
            password={userpw}
            setPassword={setUserPw}
        />
    );
};

export default LoginModalContainer;