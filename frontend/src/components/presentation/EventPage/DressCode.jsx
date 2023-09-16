import React from 'react';
import smung from '../../../assets/EventPage/smung.webp';
import stick from '../../../assets/EventPage/stick.webp';
import soldoutsmung from '../../../assets/EventPage/soldoutsmung.webp';
import soldoutstick from '../../../assets/EventPage/soldoutstick.webp';
import '../../../styles/components/EventPage/DressCode.scss';


const DressCode = ({datas, textArray2}) => {
    return (
        <div className='DressCode_Container'>
            <div className='DressCode_Wrapper'>
                <div className='DressCode_Wrapper_MainTitle'>
                    드레스코드
                </div>
                <div className='Detail_Gift'>
                    <div className='Detail_Gift_LayOut' style={{marginRight : '23px'}}>
                        <div className='Detail_Gift_Name' style={{marginBottom: '9px'}}>상품1</div>
                        <div className='Detail_Gift_Img'>{datas[0].dress === 1 ? <img src={stick} alt=''/> : <img src={soldoutstick} alt=''/>}</div>
                        <div className='Detail_Gift_DetailName' style={{fontSize: '18px'}}>야광봉</div>
                        <div className='Detail_Gift_CountBox'>{datas[0].dress === 1 ? '남은수량 500개' : '남은수량 0개'}</div>
                    </div>
                    <div className='Detail_Gift_LayOut'>
                        <div className='Detail_Gift_LayOut'>
                            <div className='Detail_Gift_Name' style={{marginBottom: '4px'}}>상품2</div>
                            <div className='Detail_Gift_Img'>{datas[1].dress === 1 ? <img src={smung} alt=''/> : <img src={soldoutsmung} alt=''/>}</div>
                            <div className='Detail_Gift_DetailName' style={{fontSize: '16px', marginTop: '7px'}}>수뭉이 타투 스티커(10종)</div>
                            <div className='Detail_Gift_CountBox'>{datas[1].dress === 1 ? '남은수량 1000개' : '남은수량 0개'}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='DressCode_dressWrapper'>
                <div className='DressCode_dress'>
                    <div>드레스코드</div>
                    <div className='DressCode_Point'></div>
                </div>
                <div className='DressCode_Detail'>
                    <div className='DressCode_Detail_Layout'>
                        <div className='DressCode_Detail_Layout_Title3'>시간</div>
                        <div className='DressCode_Detail_Layout_Text' style={{width : '200px' ,textAlign: 'right'}}>2023.09.25 (월) 11:00~20:00</div>
                    </div>
                    <div className='DressCode_Detail_Layout'>
                        <div className='DressCode_Detail_Layout_Title'></div>
                        <div className='DressCode_Detail_Layout_Text3' style={{width : '200px' ,textAlign: 'right'}}>2023.09.26 (화) <br/>11:00~선착순 소진 시</div>
                    </div>
                    <div className='DressCode_Detail_Layout'>
                        <div className='DressCode_Detail_Layout_Title'>대상</div>
                        <div className='DressCode_Detail_Layout_Text' style={{width : '130px'}}>학생회비를 납부한 상명대학교 재학생</div>
                    </div>
                    <div className='DressCode_Detail_Layout'>
                        <div className='DressCode_Detail_Layout_Title'>색상</div>
                        <div className='DressCode_Detail_Layout_Text1' style={{width : '200px'}}>파란색</div>
                    </div>
                    <div className='DressCode_Detail_Layout'>
                        <div className='DressCode_Detail_Layout_Title2'>지급장소</div>
                        <div className='DressCode_Detail_Layout_Text2' style={{width : '200px'}}>총학생회 운영본부</div>
                    </div>
                </div>
            
                <div className='DressCode_best'>
                    <div>Best Dresser</div>
                    <div className='DressCode_Point'></div>
                </div>
                <div className='DressCode_Detail'>
                    <div className='DressCode_Detail_Layout'>
                        <div className='DressCode_Detail_Layout_Title3'>시간</div>
                        <div className='DressCode_Detail_Layout_Text' style={{width : '130px'}}>2023.09.25 (월) <br/>~2023.09.26 (화)<br/>11:00~18:00</div>
                    </div>
                    <div className='DressCode_Detail_Layout'>
                        <div className='DressCode_Detail_Layout_Title2'>상품</div>
                        <div className='DressCode_Detail_Layout_Text4' style={{width : '220px',textAlign: 'right'}}>1등(3명) - 신세계 백화점 상품권 (100,000원)<br/>2등(1명) - 신세계 백화점 상품권(50,000원)<br/>3등(1명) - 신세계 백화점 상품권(30,000원)</div>
                    </div>
                    <div className='DressCode_Detail_Layout'>
                        <div className='DressCode_Detail_Layout_Title2'>지급장소</div>
                        <div className='DressCode_Detail_Layout_Text2' style={{width : '200px'}}>상명대학교 총학생회실</div>
                    </div>
                </div>

                <div className='DressCode_bestjoin'>
                    <div>Best Dresser 참여방법</div>
                    <div className='DressCode_Point2'></div>
                </div>
                <div className='DressCode_Detail'>
                    <div style={{marginLeft : 'auto', marginRight: 'auto'}}>
                        {textArray2.map((text, index) => (
                            <div key={index} className='DressCode_notice3'>
                                <div className='DressCode_notice3_number'>{index+1}.</div>
                                <div className='DressCode_notice4' style={{width : text.width, height : text.height}}>{text.content}</div>
                            </div>  
                        ))}
                    </div>
                    <div className='DressCode_notice'>(월, 화요일 게시자 전체를 한 번에 집계합니다.)</div>
                    <div className='DressCode_BottomText_Collection'>
                        <div className='DressCode_BottomText1'>인스타그램은 공개 계정으로 업로드 부탁드립니다.</div>
                        <div className='DressCode_BottomText1'>(계정당 1회 참여 가능)</div>
                        <div className='DressCode_BottomText2Wrapper'>
                            <div className='DressCode_BottomText2'>상품은 학생회비를 납부한 재학생에 한하여 지급됩니다.<br/>심사의 기준은 심사자 재량입니다.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DressCode;