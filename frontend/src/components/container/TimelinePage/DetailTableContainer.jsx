import React, {useState, useEffect} from 'react';
import { tableDatas1, tableDatas2 } from './dataSet';
import DetailTable from '../../presentation/TimelinePage/DetailTable';

export const times1 = ['10:00','13:00','15:30','17:00','18:00', '19:00', '20:00', '21:00', '22:00'];
export const times2 = ['10:00','13:00','15:30','16:00','18:00', '19:00', '20:00', '21:00', '22:00'];



const DetailTableContainer = ({selectedDate}) => {
    const [activeTimeIndex, setActiveTimeIndex] = useState(0);
    const times = selectedDate === "9.25 (월)" ? times1 : times2;

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
       if (new Date().getMonth() === 8 && new Date().getDate() === 14) {
           setActiveTimeIndex(getCurrentTimeIndex());

           const intervalId = setInterval(() => {
               setActiveTimeIndex(getCurrentTimeIndex());
           }, 60 * 1000); 

           return () => clearInterval(intervalId); 
       }
   }, []);

   useEffect(() => {
    if (new Date().getMonth() === 8 && new Date().getDate() === 15) {
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