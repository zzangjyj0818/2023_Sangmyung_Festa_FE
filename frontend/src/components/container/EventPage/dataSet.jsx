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

export const textArray = [
    { 
        content : "학생회비를 납부한 재학생에 한하여 인당 1개의 캡슐을 뽑음",
        width : 265,
        height : 46,
    }, 
    {
        content : "암호가 적힌 캡슐을 뽑은 경우 상자를 열어볼 기회를 제공",
        width : 219,
        height : 46,
    }, 
    {
        content : "상자가 열린 경우 상자 내용에 맞는 상품 지급 & 명단 작성",
        width : 256,
        height : 46,
    }, 
    {
        content : "암호가 적힌 캡슐을 뽑은 경우 상자를 열어볼 기회를 제공",
        width : 219,
        height : 46,
    }
];