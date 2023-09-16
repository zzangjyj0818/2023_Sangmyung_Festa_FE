import React, { useState, useEffect } from 'react';

function Timer2() {
    const startDate = new Date(2023, 8, 17, 0,40); // 월은 '0'부터 시작하기 때문에 '8'은 실제로는 '9월'을 의미합니다.
    const endDate = new Date(startDate.getTime() + (6 *60 +30) *60000); // 시작 시간으로부터 약6시간30분 후
  
    // 초 단위로 남은 시간을 계산하는 함수수
    const calculateTimeLeft = () => {
        if(new Date() < startDate) { // 만약 현재 시각이 startDate 보다 이른 경우,
            return { hours:0 , minutes:0 , seconds :0 }; // 초기값 반환
        }

        let diffInSeconds = Math.floor((endDate - new Date()) /1000);
        if(diffInSeconds <0) diffInSeconds=0; // 이미 끝났다면 남은 시간은 '0'

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
       {`${timeLeft.hours.toString().padStart(2,'0')} : ${timeLeft.minutes.toString().padStart(2,'0')} : ${timeLeft.seconds.toString().padStart(2,'0')}`}
     </div>
   );
}

export default Timer2;
