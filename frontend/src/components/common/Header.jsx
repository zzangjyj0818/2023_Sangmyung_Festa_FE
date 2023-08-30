import React from 'react';
import Menu from './Menu';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import '../../styles/components/common/Header.scss';
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({name, type, opacity, isOpen, setIsOpen, onClick, navigate}) => {
    return (
        <div className={opacity === false ? 'Header_Container1' : 'Header_Container2'}>
            <div className='Header_Wrapper'>
                <div className='Header_Img' onClick = {()=>navigate('/')}>
                    <img src = {type === 1 ? Logo2 : Logo1} alt='' style={{width: '67px', height : '48px'}}/>
                </div>
                {name !== undefined && <div className='Header_Props'>{name}</div>}
                <div className='Header_MenuIcon' onClick={onClick}>
                    <AiOutlineMenu size={20} color={type === 1 ? 'black' : 'white'}/>
                    {isOpen && <Menu isOpen = {isOpen} setIsOpen = {setIsOpen} onClick={onClick} navigate={navigate}/>}
                </div>
            </div>
        </div>
    );
};

export default Header;