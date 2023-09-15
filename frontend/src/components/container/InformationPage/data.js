const tagData = [
  { id: 1, name: "인더스트리얼디자인", heart: false },
  { id: 2, name: "소프트웨어", heart: false },
  { id: 3, name: "팜므", heart: false },
  { id: 4, name: "스페이스디자인", heart: false },
  { id: 5, name: "마음건강연구회", heart: false },
  { id: 6, name: "그린스마트시티", heart: false },
  { id: 7, name: "시스템반도체", heart: false },
  { id: 8, name: "단과대", heart: false },
  { id: 9, name: "무대미술", heart: false },
  { id: 10, name: "식물식품공학", heart: false },
  { id: 11, name: "세라믹디자인", heart: false },
  { id: 12, name: "건설시스템공학", heart: false },
  { id: 13, name: "그린화학공학", heart: false },
  { id: 14, name: "스마트정보보안", heart: false },
  { id: 15, name: "품에안고", heart: false },
  { id: 16, name: "Questioners", heart: false },
  { id: 17, name: "상명유람단", heart: false },
  { id: 18, name: "요쿡", heart: false },
  { id: 19, name: "다크니스", heart: false },
  { id: 20, name: "실오라기&클럽씨", heart: false },
  { id: 21, name: "동아리연합회", heart: false },
]

// 푸드트럭
const tagData_food = [
  { id: 1, name: "푸드트럭1", heart: false },
  { id: 2, name: "푸드트럭2", heart: false },
  { id: 3, name: "마싯는야끼소바", heart: false },
  { id: 4, name: "탕후루", heart: false },
  { id: 5, name: "젤라또", heart: false },
  { id: 6, name: "푸드트럭3", heart: false },
  { id: 7, name: "푸드트럭4", heart: false },
  { id: 8, name: "푸드트럭5", heart: false },
]

// 외부부스
const tagData_Out = [
  { id: 1, name: "하이트진로", heart: false },
  { id: 2, name: "질레트", heart: false },
  { id: 3, name: "어더아사", heart: false },
  { id: 4, name: "영단기", heart: false },
  { id: 5, name: "탕후루", heart: false },
  { id: 6, name: "러벌스 스튜디오", heart: false },
]

const tagData_Out2 = [
  { id: 1, name: "밝은눈안과", heart: false },
  { id: 2, name: "MC섭이네", heart: false },
  { id: 3, name: "유진상회", heart: false },
  { id: 4, name: "겟아웃", heart: false },
]

//동아리 학과 부스
const infoData = [
  { id: 1, tagId: 1, content: "10:00 ~ 20:00", Game: "2000원 10발" },
  { id: 2, tagId: 2, content: "10:00 ~ 21:00" },
  { id: 3, tagId: 3, content: "10:00 ~ 22:00" },
  { id: 4, tagId: 4, content: "10:00 ~ 24:00" },
  { id: 5, tagId: 5, content: "10:00 ~ 20:00" },
  { id: 6, tagId: 6, content: "10:00 ~ 21:00" },
  { id: 7, tagId: 7, content: "10:00 ~ 22:00" },
  { id: 8, tagId: 8, content: "10:00 ~ 24:00" },
  { id: 9, tagId: 9, content: "10:00 ~ 20:00" },
  { id: 10, tagId: 10, content: "10:00 ~ 21:00" },
  { id: 11, tagId: 11, content: "10:00 ~ 22:00" },
  { id: 12, tagId: 12, content: "10:00 ~ 24:00" },
  { id: 13, tagId: 13, content: "10:00 ~ 20:00" },
  { id: 14, tagId: 14, content: "10:00 ~ 21:00" },
  { id: 15, tagId: 15, content: "10:00 ~ 22:00" },
  { id: 16, tagId: 16, content: "10:00 ~ 24:00" },
  { id: 17, tagId: 17, content: "10:00 ~ 20:00" },
  { id: 18, tagId: 18, content: "10:00 ~ 21:00" },
  { id: 19, tagId: 19, content: "10:00 ~ 22:00" },
  { id: 20, tagId: 20, content: "10:00 ~ 24:00" },
  { id: 21, tagId: 21, content: "10:00 ~ 20:00" },
]

//푸드트럭
const infoData_food = [
  { id: 1, tagId: 1, content: "10:00 ~ 20:00" },
  { id: 2, tagId: 2, content: "10:00 ~ 21:00" },
  { id: 3, tagId: 3, content: "10:00 ~ 22:00" },
  { id: 4, tagId: 4, content: "10:00 ~ 24:00" },
  { id: 5, tagId: 5, content: "10:00 ~ 20:00" },
  { id: 6, tagId: 6, content: "10:00 ~ 21:00" },
  { id: 7, tagId: 7, content: "10:00 ~ 22:00" },
  { id: 8, tagId: 8, content: "10:00 ~ 24:00" },
]
//외부 부스
const infoData_Out = [
  { id: 1, tagId: 1, content: "10:00 ~ 20:00" },
  { id: 2, tagId: 2, content: "10:00 ~ 21:00" },
  { id: 3, tagId: 3, content: "10:00 ~ 22:00" },
  { id: 4, tagId: 4, content: "10:00 ~ 24:00" },
  { id: 5, tagId: 5, content: "10:00 ~ 20:00" },
  { id: 6, tagId: 6, content: "10:00 ~ 21:00" },
]

// const tagData2 = [
//   { id: 1, name: "띵작스튜디오" },
//   { id: 2, name: "무대미술" },
//   { id: 3, name: "그린화학공학" },
//   { id: 4, name: "세글자" },
//   { id: 5, name: "???" },
// ]

// const tagData_food2 = [
//   { id: 1, name: "정문 푸드트럭1", heart: false },
//   { id: 2, name: "정문 푸드트럭2", heart: false },
//   { id: 3, name: "정문 마싯는야끼소바", heart: false },
//   { id: 4, name: "정문 탕후루", heart: false },
//   { id: 5, name: "정문 젤라또", heart: false },
//   { id: 6, name: "정문 푸드트럭3", heart: false },
//   { id: 7, name: "정문 푸드트럭4", heart: false },
//   { id: 8, name: "정문 푸드트럭5", heart: false },
// ]

export {
  tagData,
  infoData,
  tagData_food,
  infoData_food,
  tagData_Out,
  tagData_Out2,
  infoData_Out,
}
