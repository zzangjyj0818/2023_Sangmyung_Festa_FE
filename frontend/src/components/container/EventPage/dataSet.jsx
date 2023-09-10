import SeatDraw from '../../presentation/EventPage/SeatDraw';
import TreasureHunt from '../../presentation/EventPage/TreasureHunt';
import DressCode from '../../presentation/EventPage/DressCode';

export const categories = [
    { name: '좌석 추첨', component: <SeatDraw /> },
    { name: '보물 찾기', component: <TreasureHunt /> },
    { name: '드레스 코드', component: <DressCode /> }
];

export const categoryDescriptions = {
    "좌석 추첨": "스위치 비행기 좌석 추첨",
    "보물 찾기": "Switch의 선물을 unlock!",
    "드레스 코드": "드레스 코드에 대한 설명"
  };