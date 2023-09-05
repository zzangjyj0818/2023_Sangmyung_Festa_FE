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
    
      const currentScroll = slider.scrollLeft + slider.offsetWidth / 2;
      
      let closestSlideIndex = slides.reduce((prev, curr, index) => {
        return Math.abs(curr.offsetLeft + curr.offsetWidth / 2 - currentScroll) < Math.abs(slides[prev].offsetLeft + slides[prev].offsetWidth / 2 - currentScroll)
          ? index
          : prev;
      }, 0);      
      
      slides.forEach((slide, index) => {
        if (index === closestSlideIndex) {
          slide.classList.add("active");
          slide.classList.remove("blur");
        } else {
          slide.classList.add("blur");
          slide.classList.remove("active");
        }
      });
    };

    // 스크롤 이벤트 리스너 등록
    sliderRef.current.addEventListener("scroll", handleScroll);

    // 컴포넌트 unmount 시에 이벤트 리스너 제거
    return () => {
      if (sliderRef.current) {
        // 해당 DOM 요소의 존재 여부 확인 후 제거 로직 실행
        sliderRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []); // sliderRef.current를 의존성 배열에서 제거


  const handleClickImage = (event, index) => {
    event.preventDefault();
  
    if (!sliderRef.current || !sliderRef.current.children[index]) return;
  
    // Calculate the scroll position of the clicked image and scroll there smoothly
    let newScrollPosition =
      sliderRef.current.children[index].offsetLeft -
      (sliderRef.current.offsetWidth - sliderRef.current.children[index].offsetWidth) / 2;
  
     // Scroll to the clicked image smoothly within the container only
     smoothScroll(newScrollPosition - 12);
  };
  



function smoothScroll(targetPosition){
     let start=null;
     let currentPosition=sliderRef?.current?.scrollLeft ||0;
     
     function step(timestamp){
         if(!start) start=timestamp;
         let progress=timestamp-start;
         sliderRef.current.scrollLeft=currentPosition+(targetPosition-currentPosition)*progress/500;
         if(progress<495) window.requestAnimationFrame(step);
        
     }
     window.requestAnimationFrame(step);
 }


  return (
   <div className='slide_Container'>
     <div className="slider" ref={sliderRef}>
       <div className="slide active" onClick={(event) => handleClickImage(event, 0)} style={{marginLeft : '41px'}}>
         <img src={AirPlane} alt=""/>
       </div>
       <div className="slide blur" onClick={(event) => handleClickImage(event, 1)}>
         <img src={AirPlane} alt=""/>
       </div>
       <div className="slide blur" onClick={(event) => handleClickImage(event, 2)}>
         <img src={AirPlane} alt=""/>
       </div>
       <div className="slide blur" onClick={(event) => handleClickImage(event, 3)} style={{marginRight : '41px'}}>
         <img src={AirPlane} alt =""/>
       </div>
     </div>
   </div>
 );
};

export default SlideShow;
