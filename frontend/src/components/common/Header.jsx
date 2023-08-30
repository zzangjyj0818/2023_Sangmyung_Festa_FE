import React from 'react';
import Menu from './Menu';
import Logo from '../../assets/Logo.png';
import '../../styles/components/common/Header.scss';
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({isOpen, setIsOpen, onClick, navigate}) => {
    return (
        <div className='Header_Container'>
            <div className='Header_Wrapper'>
                <div className='Header_Img' onClick = {()=>navigate('/')}>
                    <img src = {Logo} alt='' style={{width: '67px', height : '48px'}}/>
                </div>
                <div className='Header_MenuIcon' onClick={onClick}>
                    <AiOutlineMenu size={20}/>
                    {isOpen && <Menu isOpen = {isOpen} setIsOpen = {setIsOpen} onClick={onClick} navigate={navigate}/>}
                </div>
            </div>
        </div>
    );
};

export default Header;