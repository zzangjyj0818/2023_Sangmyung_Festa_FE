import React from 'react';
import Menu from './Menu';
import Logo1 from '../../assets/common/Logo1.webp';
import Logo2 from '../../assets/common/Logo2.webp';
import '../../styles/components/common/Header.scss';
import menu1 from '../../assets/common/menu1.webp';
import menu2 from '../../assets/common/menu2.webp';

const Header = ({name, type, opacity, isOpen, setIsOpen, onClick, navigate}) => {
    return (
        <div className={opacity === false ? 'Header_Container1' : 'Header_Container2'}>
            <div className='Header_Wrapper'>
                <div className='Header_Img' onClick = {()=>navigate('/')}>
                    <img src = {type === 1 ? Logo2 : Logo1} alt='' style={{width: '65px', height : '48px'}}/>
                </div>
                {name !== undefined && <div className='Header_Props'>{name}</div>}
                <div className='Header_MenuIcon' onClick={onClick}>
                    <img src={type === 1 ? menu1 : menu2} alt = '' style={type === 1 ? {width:'14px' , height: '14px'} : {width : '20px', height : '20px'}}/>
                    {isOpen && <Menu isOpen = {isOpen} setIsOpen = {setIsOpen} onClick={onClick} navigate={navigate}/>}
                </div>
            </div>
        </div>
    );
};

export default Header;