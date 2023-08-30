import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import Header from '../../common/Header';


const HeaderContainer = ({name, type}) => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


    const onClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Header
            name = {name}
            type = {type}
            isOpen = {isOpen} 
            setIsOpen = {setIsOpen} 
            onClick = {onClick}
            navigate = {navigate}
        />
    );
};

export default HeaderContainer;