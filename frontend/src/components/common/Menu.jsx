import React from 'react';
import '../../styles/components/common/Menu.scss';

const items = [
    {
        id : 1,
        text : '🎆 주요 행사',
    },
    {
        id : 2,
        text : '⏰ 타임 테이블',
    },
    {
        id : 3,
        text : '🎉 부스/푸드트럭',
    },
    {
        id : 4,
        text : '🤷 누가 만들었나요?',
    }
]
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
                <div className='Modal_Horizon'></div>
                <div className='Modal_items'>
                    {items.map(item => 
                        <div key={item.id} className='Modal_item'>{item.text}</div>)}
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Menu;