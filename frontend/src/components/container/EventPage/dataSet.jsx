import SeatDrawContainer from './SeatDrawContainer';
import TreasureHuntContainer from './TreasureHuntContainer';
import DressCodeContainer from './DressCodeContainer';

export const categories = [
    { name: '좌석 추첨', component: <SeatDrawContainer /> },
    { name: '보물 찾기', component: <TreasureHuntContainer /> },
    { name: '드레스 코드', component: <DressCodeContainer /> }
];

export const categoryDescriptions = {
    "좌석 추첨": "스위치 비행기 좌석 추첨",
    "보물 찾기": "Switch의 선물을 unlock!",
    "드레스 코드": "드레스 코드에 대한 설명"
  };