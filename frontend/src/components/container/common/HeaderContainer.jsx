import React, {useState} from 'react';
import Header from '../../common/Header';


const HeaderContainer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Header 
            isOpen = {isOpen} 
            setIsOpen = {setIsOpen} 
            onClick = {onClick} 
        />
    );
};

export default HeaderContainer;