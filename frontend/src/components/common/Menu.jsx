import React from 'react';
import '../../styles/components/common/Menu.scss';

const items = [
    {
        id : 1,
        text : '🎆 주요 행사',
        url : '/'
    },
    {
        id : 2,
        text : '⏰ 타임 테이블',
        url : '/timeline'
    },
    {
        id : 3,
        text : '🎉 부스/푸드트럭',
        url : '/information'
    },
    {
        id : 4,
        text : '🤷 누가 만들었나요?',
        url : '/creator'
    }
]
const Menu = ({isOpen, setIsOpen ,onClick, navigate}) => {
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
                        <div key={item.id} className='Modal_item' onClick={()=>navigate(item.url)}>{item.text}</div>)}
                </div>
                <div className='Modal_Bottom_Wrapper'>
                    <div>
                        <div>축제 문의</div>
                        <div>
                            <div></div>
                            <div>
                                <div>총학생회</div>
                                <div>인스타그램</div>
                            </div>
                        </div>
                        <div>
                            <div></div>
                            <div>
                                <div>총학생회</div>
                                <div>카카오톡 오픈채팅</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>사이트 문의</div>
                        <div>
                            <div></div>
                            <div>
                                <div>멋쟁이 사자처럼</div>
                                <div>인스타그램</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;