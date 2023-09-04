import React, { useEffect, useRef } from 'react';
import '../../../styles/components/TimelinePage/SlideShow.scss';
import AirPlane from '../../../assets/MainPage/AirplaneSeat.png';

const SlideShow = () => {
    const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const handleScroll = () => {
      const slider = sliderRef.current;
      const slides = Array.from(slider.children);
      let activeSlideIndex = slides.findIndex(slide => slide.classList.contains('active'));
      
      const currentScroll = slider.scrollLeft;
      const slideStarts = slides.map(slide => slide.offsetLeft);

      for(let i=0; i<slideStarts.length; i++) {
        if(currentScroll + slider.offsetWidth/2 <= slideStarts[i]) { 
          activeSlideIndex = i-1; 
          break;
        }

        if(i === slideStarts.length -1) activeSlideIndex = i;
      }

      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'blur');
        if(index === activeSlideIndex) slide.classList.add('active');
        else slide.classList.add('blur');
      });
    };

    // 스크롤 이벤트 리스너 등록
    sliderRef.current.addEventListener('scroll', handleScroll);

    // 컴포넌트 unmount 시에 이벤트 리스너 제거
    return () => {
       if (sliderRef.current) { // 해당 DOM 요소의 존재 여부 확인 후 제거 로직 실행
         sliderRef.current.removeEventListener('scroll', handleScroll);
       }
    };
  }, [sliderRef.current]);
     
  return (
   <div className='slider_Container'>
     <div className="slider" ref={sliderRef}>
       <div className="slide active" style={{marginLeft : '57px'}}>
         <img src={AirPlane} alt="Image 1"/>
       </div>
       <div className="slide blur"> 
         <img src={AirPlane} alt="Image 2"/>
       </div>
       <div className="slide blur">
         <img src={AirPlane} alt="Image 3"/>
       </div>
       <div className="slide blur">
         <img src={AirPlane} alt ="Image4"/>
       </div>
     </div>
   </div>
 );
};

export default SlideShow;
