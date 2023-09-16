import React from 'react';
import '../../../styles/components/TimelinePage/SlideShow.scss';
import ColorTime from '../../../assets/TimelinePage/color_time.webp';
import Time from '../../../assets/TimelinePage/carbon_time.webp';
import Location from '../../../assets/TimelinePage/carbon_location.webp';

const SlideShow = ({index, setIndex, datas, front, onClick}) => {
  return (
    <div className='SlideShow_Container'>
      <div className='SlideShow_Wrapper'>
        <div className='SlideShow_Box'>
          { index > 0 ? 
            <div className='img_btn' style={{marginRight : '15px'}} onClick={()=>{setIndex(index-1)}}>
              <img src={datas[index-1].url} alt='' className='img_btn_img'/>
            </div> : <div className='null_img_btn' style={{marginRight : '15px'}}></div>
            }
          <div className='img_current'>
            { front === true ?
              <div className="front" onClick={onClick}>
                <img src={datas[index].url} alt='' style={{width: '262px', height : '331px', borderRadius: '20px'}}/>
              </div>
              :
              <div className="back" onClick={onClick}>
                <div className='back_time'>
                  <img src={Time} alt =''  style={{width: '10px', height: '10px'}}/> &nbsp;
                  {datas[index].time}
                </div>
                <div className='back_name'>
                  <div className='kor'>{datas[index].kor}</div>
                  <div className='eng'>{datas[index].eng}</div>
                </div>
                <div className='back_contents'>
                  <div className='content1'>{datas[index].content1}</div>
                  <div className='title'>✏️ 알고 있나요?</div>
                  <div className='content2'>{datas[index].content2}</div>
                </div>
                <div className='back_logo'>
                  <div>상명대학교 천안캠퍼스</div>
                  <div>Like Lion X SMCD</div>
                </div>
              </div>
            }
          </div>
          { index < 3 ?
            <div className='img_btn' style={{marginLeft : '15px'}} onClick={()=>{setIndex(index+1)}}>
              <img src={datas[index+1].url} alt='' className='img_btn_img'/>
            </div> : <div className='null_img_btn' style={{marginRight : '15px'}}></div>
          }
        </div>
        <div className='extra_data'>
          <div className='circle_collection'>
            {datas.map((data) => (
              <div key={data.id} className='circle' style={{background : index  === data.id ? '#92AAFF' : '#C8C6CA' }}></div>
          ))}
          </div>
          <div className='extra_data_big_text'>{datas[index].kor}</div>
          <div className='extra_data_small_text'>
              <div className=""><img src={ColorTime} alt='' style={{width: '12px', height:'12px'}}/></div>
              <div style={{color: '#AB85A2'}}>21:00-22:00</div>
          </div>
          <div className='extra_data_small_text'>
              <div className=""><img src={Location} alt='' style={{width: '12px', height:'12px'}}/></div>
              <div style={{color: 'black'}}>노천극장</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;