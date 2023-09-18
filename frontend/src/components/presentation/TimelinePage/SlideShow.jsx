import React from 'react';
import Swiper from 'react-id-swiper';
import '../../../../node_modules/swiper/swiper.scss';
import '../../../styles/components/TimelinePage/SlideShow.scss';
import ColorTime from '../../../assets/TimelinePage/color_time.webp';
import Location from '../../../assets/TimelinePage/carbon_location.webp';
import Time from '../../../assets/TimelinePage/carbon_time.webp';

const SlideShow = ({index, setIndex, datas, params, front, setFront}) => {

  return (
    <div className='SlideShow_Wrapper'>
      <Swiper {...params}>
        {datas.map(data => (
          <div className='SlideShow_Wrapper_LayOut' key={data.id}>
            <div 
              className={`SlideShow_Wrapper_Img_Box ${index === data.id && front ? 'flipped' : ''}`}
              onClick={() => { if (index === data.id) setFront(!front); }}
            >
              <div className='card-inner'>
                <div className="card-front">
                  <img src={data.url} alt='' className='SlideShow_Wrapper_Img'/>
                </div>
                <div className='card-back'>
                  <div className="Img_Detail" >
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
                </div>
              </div>
            </div> 
          </div>
        ))}
      </Swiper>
      <div className='extra_data'>
          <div className='circle_collection'>
            {datas.map((data) => (
              <div key={data.id} className='circle' style={{background : index  === data.id ? '#92AAFF' : '#C8C6CA' }}></div>
          ))}
          </div>
          <div className='extra_data_big_text'>{datas[index].kor}</div>
          <div className='extra_data_small_text'>
              <div className=""><img src={ColorTime} alt='' style={{width: '12px', height:'12px'}}/></div>
              <div style={{color: '#AB85A2'}}>{datas[index].time}</div>
          </div>
          <div className='extra_data_small_text'>
              <div className=""><img src={Location} alt='' style={{width: '12px', height:'12px'}}/></div>
              <div style={{color: 'black'}}>노천극장</div>
          </div>
        </div>
    </div>
  )
}

export default SlideShow;
