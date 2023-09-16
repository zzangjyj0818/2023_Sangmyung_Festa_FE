import React, { useState, useEffect } from 'react';

function Timer() {
  const targetDate = new Date(2023, 8, 17, 11); // 월은 0부터 시작하기 때문에 9월은 '8'로 표시됩니다.
  const endTime = new Date(targetDate.getTime() + (6 * 60 +30) *60000); // 시작 시간으로부터 6시간30분 후
  // const endTime = new Date(targetDate.getTime() + (0*60+1)*60000); //1분 테스트

  
    // 초 단위로 남은 시간을 계산하는 함수
    const calculateTimeLeft = () => {
      let diffInSeconds = Math.floor((endTime - new Date()) / 1000);

      return {
        hours: Math.floor(diffInSeconds /3600),
        minutes: Math.floor((diffInSeconds %3600) /60),
        seconds: diffInSeconds %60,
      };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timerId = setInterval(() => {
          let timeRemaining = calculateTimeLeft();
  
          if(timeRemaining.hours <=0 && timeRemaining.minutes <=0 && timeRemaining.seconds <=0){
            clearInterval(timerId);
            setTimeLeft({hours:0 , minutes:0 , seconds :0});
            return;
          }
          
          setTimeLeft(timeRemaining);
        },1000);
      
        return () => clearInterval(timerId);
      }, []);

  
   return (
     <div>
       {`${timeLeft.hours.toString().padStart(2,'0')}:${timeLeft.minutes.toString().padStart(2,'0')}:${timeLeft.seconds.toString().padStart(2,'0')}`}
     </div>
   );
}

export default Timer;
