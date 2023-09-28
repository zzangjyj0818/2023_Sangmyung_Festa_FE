import React, {useState, useEffect, useRef} from 'react';
import SlideShow from '../../presentation/TimelinePage/SlideShow';

const SlideShowContainer = ({datas, selectedDate}) => {
    const [index, setIndex] = useState(0);
    const [front, setFront] = useState(true);
    const swiperRef = useRef(null); // Ref to access Swiper instance

   const params = {
      on: { 
          init: (swiper) => {
              swiperRef.current = swiper; // Save Swiper instance to ref
          },
          slideChange: (swiper) => { 
              setIndex(swiper.activeIndex);
              setFront(true);
          }
      },
      spaceBetween: 170,
      slidesPerView: 2,
      centeredSlides: true,
      roundLengths: true,
      loop: false,
   }

   useEffect(() => {
       if (selectedDate && swiperRef.current) {
           setIndex(0);
           swiperRef.current.slideTo(0); // Change the current slide to the first one
       }
   }, [selectedDate]);

   return (
     <SlideShow 
         index={index} 
         datas={datas}
         params={params}
         front={front}
         setFront={setFront}
         />
     );
};

export default SlideShowContainer;
