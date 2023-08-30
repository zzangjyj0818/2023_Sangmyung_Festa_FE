import React from 'react';
import '../../styles/components/common/Menu.scss';

const Menu = ({isOpen, setIsOpen ,onClick}) => {
    return (
        <div className="Modal" onClick={onClick}>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
                <button id="modalCloseBtn" onClick={onClick}>
                    x
                </button>
                <div className='Modal_Text'>
                    <div className='Modal_Text1'>Dear For U</div>
                    <div className='Modal_Text2'>: 비상</div>
                </div>
            </div>
        </div>
    );
};

export default Menu;