import React from 'react';
import '../../styles/components/common/Menu.scss';

const Menu = ({isOpen, setIsOpen ,onClick}) => {
    return (
        <div className="Modal" onClick={onClick}>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
                <button id="modalCloseBtn" onClick={onClick}>
                    ✖
                </button>
            </div>
        </div>
    );
};

export default Menu;