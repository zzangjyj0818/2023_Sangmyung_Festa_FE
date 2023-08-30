import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import Header from '../../common/Header';


const HeaderContainer = ({name, type, opacity}) => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


    const onClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Header
            name = {name}
            type = {type}
            opacity = {opacity}
            isOpen = {isOpen} 
            setIsOpen = {setIsOpen} 
            onClick = {onClick}
            navigate = {navigate}
        />
    );
};

export default HeaderContainer;