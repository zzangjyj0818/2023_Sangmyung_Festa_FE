import React from 'react';
import Logo from '../../assets/Logo.png';
import '../../styles/components/common/Header.scss';

const Header = () => {
    return (
        <div className='Header_Container'>
            <div className='Header_Wrapper'>
                <div>
                    <img src = {Logo} alt='' style={{width: '50px', height : '50px'}}/>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Header;