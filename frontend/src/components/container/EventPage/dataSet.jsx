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


export const textArray2 = [
    { 
        content : "파란색 아이템을 착용하고 드레스코드 룩을 찍어 11시 -18시 사이에 Switch 총학생회 인스타그램 계정을 태그하여 업로드(@smu_switch_38th)",
        width : 280,
        height : 96,
    }, 
    {
        content : `당일 18시에 총학생회 측에서 인스타그램 스토리를 언급 순서대로 리그램(하루 동안 하이라이트에 게시)`,
        width : 263,
        height : 72,
    }, 
    {
        content : "총학생회 인스타그램에 리그램된 스토리 중 하트를 많이 받은 순으로 등수 확인 (24시간동안 진행, 동일한 하트를 받을 시 해당 학우들의 동의 하에 인스타그램에서 투표진행)",
        width: 274.113,
        height: 120,
    }, 
    {
        content : "행사 종료 이후, 인스타그램 스토리 좋아요수 확인을 하며, 베스트 드레서 발표는 사진과 함께 업로드",
        width : 278,
        height : 80,
    }
];