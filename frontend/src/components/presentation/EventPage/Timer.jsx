import React from 'react';

function Timer({timeLeft}) {
   
   return (
     <div>
       {`${timeLeft.hours.toString().padStart(2,'0')} : ${timeLeft.minutes.toString().padStart(2,'0')} : ${timeLeft.seconds.toString().padStart(2,'0')}`}
     </div>
   );
}

export default Timer;
