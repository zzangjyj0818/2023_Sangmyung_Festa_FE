import React, {useState}  from 'react';
import { useMutation } from 'react-query';
import { login } from '../../../api/postLogin';
import { useNavigate } from 'react-router';
import LoginModal from '../../presentation/AdminPage/LoginModal';

const LoginModalContainer = ({isOpen, setIsOpen}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
        mutation.mutate({ username, password });
    };

    return (
        <LoginModal 
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
        />
    );
};

export default LoginModalContainer;