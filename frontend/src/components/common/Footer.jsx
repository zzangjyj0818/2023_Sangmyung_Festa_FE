import React from 'react';
import Logo5 from '../../assets/common/logo5.webp';
import '../../styles/components/common/Footer.scss';

const Footer = () => {
    return (
        <div className='Footer_Container'>
            <div>
                <img src = {Logo5} alt='' style={{width: '67px', height : '48px'}}/>
            </div>
            <div className='uni_text'>
                상명대학교 천안캠퍼스 <br/>
            </div>
            <div className='Ls'> 
                Like Lion x SMCD
            </div>
        </div>
    );
};

export default Footer;
