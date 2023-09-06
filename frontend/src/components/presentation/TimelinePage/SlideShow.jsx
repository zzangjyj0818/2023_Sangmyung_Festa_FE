import React, {useState} from 'react';
import Newjeans from '../../../assets/TimelinePage/Newjeans.png';
import Blackpink from '../../../assets/TimelinePage/Blackpink.png';
import '../../../styles/components/TimelinePage/SlideShow.scss';


const datas = [
  {
    url : Newjeans,
    time : '20:00 - 21:00',
    kor : '뉴진스',
    eng : 'NewJeans',
    content1 : 'Attention, Hypeboy, Ditto 등의 대표곡으로 많은 상명대학교 학생들의 사랑을 받고 있다.',
    content2 : '매일 찾게 되고 언제 입어도 질리지 않는 진(jean)처럼 시대의 아이콘이 되겠다는 포부를 가졌다고 한다!'
  },
  {
    url : Blackpink,
    time : '20:00 - 21:00',
    kor : '블랙핑크',
    eng : 'Blackpink',
    content1 : 'Attention, Hypeboy, Ditto 등의 대표곡으로 많은 상명대학교 학생들의 사랑을 받고 있다.',
    content2 : '매일 찾게 되고 언제 입어도 질리지 않는 진(jean)처럼 시대의 아이콘이 되겠다는 포부를 가졌다고 한다!'
  },
  {
    url : Newjeans,
    time : '20:00 - 21:00',
    kor : '뉴진스',
    eng : 'NewJeans',
    content1 : 'Attention, Hypeboy, Ditto 등의 대표곡으로 많은 상명대학교 학생들의 사랑을 받고 있다.',
    content2 : '매일 찾게 되고 언제 입어도 질리지 않는 진(jean)처럼 시대의 아이콘이 되겠다는 포부를 가졌다고 한다!'
  },
  {
    url : Blackpink,
    time : '20:00 - 21:00',
    kor : '블랙핑크',
    eng : 'Blackpink',
    content1 : 'Attention, Hypeboy, Ditto 등의 대표곡으로 많은 상명대학교 학생들의 사랑을 받고 있다.',
    content2 : '매일 찾게 되고 언제 입어도 질리지 않는 진(jean)처럼 시대의 아이콘이 되겠다는 포부를 가졌다고 한다!'
  }
];

const SlideShow = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='SlideShow_Container'>
      <div className='SlideShow_Wrapper'>
        <div className='SlideShow_Box'>
          { index > 0 && 
            <div className='img_btn' style={{marginRight : '15px'}} onClick={()=>{setIndex(index-1)}}>
              <img src={datas[index-1].url} alt='' className='img_btn_img'/>
            </div>
            }
          <div className='img_current'>
              <div class="front">
                <img src={datas[index].url} alt='' style={{width: '262px', height : '331px'}}/>
              </div>
              <div class="back">

              </div>
          </div>
          { index < 3 &&
            <div className='img_btn' style={{marginLeft : '15px'}} onClick={()=>{setIndex(index+1)}}>
              <img src={datas[index+1].url} alt='' className='img_btn_img'/>
            </div>
            }
        </div>
      </div>
    </div>
  );
};

export default SlideShow;