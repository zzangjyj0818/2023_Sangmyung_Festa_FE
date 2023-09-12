import React, {useState, useEffect} from 'react';
import { tableDatas1, tableDatas2, times } from './dataSet';
import DetailTable from '../../presentation/TimelinePage/DetailTable';

const DetailTableContainer = ({selectedDate}) => {
    const [activeTimeIndex, setActiveTimeIndex] = useState(0);

    const getCurrentTimeIndex = () => {
       const now = new Date();
       const nowInMinutes = now.getHours() * 60 + now.getMinutes();
   
       let index = times.findIndex(time => {
           const [hours, minutes] = time.split(':').map(Number);
           return hours * 60 + minutes > nowInMinutes;
       });
   
      
       if (index === -1) {
           index = times.length - 1;
       } else if (index > 0) {
           
           index--;
       }
   
       return index;
   };

   useEffect(() => {
       if (new Date().getMonth() === 8 && new Date().getDate() === 12) {
           setActiveTimeIndex(getCurrentTimeIndex());

           const intervalId = setInterval(() => {
               setActiveTimeIndex(getCurrentTimeIndex());
           }, 60 * 1000); 

           return () => clearInterval(intervalId); 
       }
   }, []);

   useEffect(() => {
    if (new Date().getMonth() === 8 && new Date().getDate() === 13) {
        setActiveTimeIndex(getCurrentTimeIndex());

        const intervalId = setInterval(() => {
            setActiveTimeIndex(getCurrentTimeIndex());
        }, 60 * 1000); 

        return () => clearInterval(intervalId); 
    }
}, []);

    return (
        <DetailTable selectedDate={selectedDate} tableDatas={selectedDate === "9.25 (월)" ? tableDatas1 : tableDatas2} times={times} activeTimeIndex={activeTimeIndex}/>
    );
};

export default DetailTableContainer;