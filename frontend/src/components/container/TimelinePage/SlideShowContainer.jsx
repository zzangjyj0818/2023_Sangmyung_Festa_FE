import React, {useEffect, useState} from 'react';
import SlideShow from '../../presentation/TimelinePage/SlideShow';

const SlideShowContainer = ({datas, selectedDate}) => {
    const [index, setIndex] = useState(0);

   const params = {
      on: { slideChange: index => { 
          setIndex(index.snapIndex);
       }},
      spaceBetween: 170,
      slidesPerView: 2,
      centeredSlides: true,
      roundLengths: true,
      loop: false,
   }

   return (
     <SlideShow 
         index={index} 
         datas={datas}
         params={params}
         />
     );
};

export default SlideShowContainer;
