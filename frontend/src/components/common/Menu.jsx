import React from 'react';
import Airplane from '../../assets/common/Airplane.png';
import Insta from '../../assets/common/Insta.png';
import Kakao from '../../assets/common/Kakao.png';
import '../../styles/components/common/Menu.scss';


const items = [
    {
        id : 1,
        text : '🎆 주요 행사',
        url : '/event'
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
                    <div className='Modal_Text1'>여러분의 탑승을</div>
                    <div className='Modal_Text2'>진심으로 환영합니다.</div>
                    <div className='Modal_Text3'>
                        <div className='Modal_Text3_detail1'>SMU</div>
                        <div className='Modal_Text3_detail2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="106" height="6" viewBox="0 0 106 6" fill="none">
                                <path d="M0.016927 3C0.016927 4.47276 1.21083 5.66667 2.68359 5.66667C4.15635 5.66667 5.35026 4.47276 5.35026 3C5.35026 1.52724 4.15635 0.333333 2.68359 0.333333C1.21083 0.333333 0.016927 1.52724 0.016927 3ZM100.017 3C100.017 4.47276 101.211 5.66667 102.684 5.66667C104.156 5.66667 105.35 4.47276 105.35 3C105.35 1.52724 104.156 0.333333 102.684 0.333333C101.211 0.333333 100.017 1.52724 100.017 3ZM2.68359 3.5H4.15418V2.5H2.68359V3.5ZM7.09536 3.5H10.0365V2.5H7.09536V3.5ZM12.9777 3.5H15.9189V2.5H12.9777V3.5ZM18.8601 3.5H21.8012V2.5H18.8601V3.5ZM24.7424 3.5H27.6836V2.5H24.7424V3.5ZM30.6248 3.5H33.5659V2.5H30.6248V3.5ZM36.5071 3.5H39.4483V2.5H36.5071V3.5ZM42.3895 3.5H45.3307V2.5H42.3895V3.5ZM48.2718 3.5H51.213V2.5H48.2718V3.5ZM54.1542 3.5H57.0954V2.5H54.1542V3.5ZM60.0365 3.5H62.9777V2.5H60.0365V3.5ZM65.9189 3.5H68.8601V2.5H65.9189V3.5ZM71.8013 3.5H74.7424V2.5H71.8013V3.5ZM77.6836 3.5H80.6248V2.5H77.6836V3.5ZM83.566 3.5H86.5071V2.5H83.566V3.5ZM89.4483 3.5H92.3895V2.5H89.4483V3.5ZM95.3307 3.5H98.2719V2.5H95.3307V3.5ZM101.213 3.5H102.684V2.5H101.213V3.5Z" fill="#4F75FF" fill-opacity="0.4"/>
                            </svg>
                            <img src={Airplane} alt='' className='Airplane'/>
                        </div>
                        <div className='Modal_Text3_detail3'>BISANG</div>
                    </div>
                </div>     
                <div className='Modal_items'>
                    {items.map(item => 
                        <div key={item.id} className='Modal_item' onClick={()=>navigate(item.url)}>
                            {item.text}
                            <div className='Modal_item_direction'>{`>`}</div>
                        </div>
                        )}
                </div>
                <div className='Modal_Bottom_Wrapper'>
                    <div className='Modal_Bottom_Content'>
                        <div className='Modal_Bottom_Title '>축제 문의</div>
                        <div className='Festival'>
                            <div className='Detail'>
                                <div><img src={Insta} alt='' style={{width: '24px', height: '24px'}}/></div>
                                <div className='Modal_Bottom_Text'>
                                    <div>총학생회</div>
                                    <div>인스타그램</div>
                                </div>
                            </div>
                            <div className='Detail' style={{marginLeft : '30px'}}>
                                <div><img src={Kakao} alt='' style={{width: '24px', height: '24px'}}/></div>
                                <div className='Modal_Bottom_Text'>
                                    <div>총학생회</div>
                                    <div>카카오톡 오픈채팅</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Modal_Bottom_Content' style={{marginBottom: '66px'}}>
                        <div className='Modal_Bottom_Title '>사이트 문의</div>
                        <div className='Festival'>
                            <div className='Detail'>
                                <div><img src={Insta} alt='' style={{width: '24px', height: '24px'}}/></div>
                                <div className='Modal_Bottom_Text'>
                                    <div>멋쟁이 사자처럼</div>
                                    <div>인스타그램</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;