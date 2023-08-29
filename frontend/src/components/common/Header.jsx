import React from 'react';
import Logo from '../../assets/Logo.png';
import '../../styles/components/common/Header.scss';
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    return (
        <div className='Header_Container'>
            <div className='Header_Wrapper'>
                <div className='Header_Img'>
                    <img src = {Logo} alt='' style={{width: '67px', height : '48px'}}/>
                </div>
                <div className='Header_MenuIcon'>
                    <AiOutlineMenu size={20}/>
                </div>
            </div>
        </div>
    );
};

export default Header;