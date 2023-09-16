// 학생회관 학과부스
const tagData = [
  { id: "std1", name: "무대미술", heart: false },
  { id: "std2", name: "메이커즈", heart: false },
  { id: "std3", name: "단과대", heart: false },
  { id: "std4", name: "인더스트리얼디자인", heart: false },
  { id: "std5", name: "마음건강연구회", heart: false },
  { id: "std6", name: "지니어스", heart: false },
  { id: "std7", name: "품에안고", heart: false },
  { id: "std8", name: "스마트정보통신", heart: false },
  { id: "std9", name: "상명유람단", heart: false },
  { id: "std10", name: "소울로", heart: false },
  { id: "std11", name: "디지털만화영상", heart: false },
  { id: "std12", name: "다크니스", heart: false },
  { id: "std13", name: "혁신사업", heart: false },
  { id: "std14", name: "팜므", heart: false },
  { id: "std15", name: "소프트웨어", heart: false },
  { id: "std16", name: "그린화학공학", heart: false },
  { id: "std17", name: "식물식품공학", heart: false },
  { id: "std18", name: "건설시스템공학", heart: false },
  { id: "std19", name: "요쿡", heart: false },
  { id: "std20", name: "Questioners", heart: false },
  { id: "std21", name: "그린스마트시티", heart: false },
  { id: "std22", name: "시스템반도체공학", heart: false },
  { id: "std23", name: "실오라기,클럽씨", heart: false },
  { id: "std24", name: "스페이스디자인", heart: false },
  { id: "std25", name: "세라믹디자인", heart: false },
  { id: "std34", name: "띵작스튜디오", heart: false },
  { id: "std35", name: "학생상담센터", heart: false },
]

// 힉생회관 푸드트럭
const tagData_food = [
  { id: "food1", name: "부엉이푸드", heart: false },
  { id: "food2", name: "타임푸드", heart: false },
  { id: "food3", name: "대감님댁", heart: false },
  { id: "food4", name: "오레오푸드", heart: false },
  { id: "food5", name: "도모도모", heart: false },
  { id: "food6", name: "블루라군", heart: false },
  { id: "food7", name: "드림", heart: false },
  { id: "food8", name: "고깃집", heart: false },
]

// 학생회관 외부부스
const tagData_Out = [
  { id: "std33", name: "왕가탕후루", heart: false },
  { id: "std31", name: "어더아사", heart: false },
  { id: "std27", name: "하이트진로", heart: false },
  { id: "std28", name: "질레트", heart: false },
  { id: "std29", name: "The터", heart: false },
  { id: "std26", name: "러벌스스튜디오", heart: false },
]

// 도서관 외부 부스 정보
const tagData_Out2 = [
  { id: "lib1", name: "밝은눈안과", heart: false },
  { id: "lib2", name: "MC섭이네", heart: false },
  { id: "lib3", name: "유진상회", heart: false },
  { id: "lib4", name: "겟아웃", heart: false },
]

// 학생회관 동아리 학과 부스
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

// 학생회관 푸드트럭 정보
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
// 학생회관 외부 부스 정보
const infoData_Out = [
  { id: 1, tagId: 1, content: "10:00 ~ 20:00" },
  { id: 2, tagId: 2, content: "10:00 ~ 21:00" },
  { id: 3, tagId: 3, content: "10:00 ~ 22:00" },
  { id: 4, tagId: 4, content: "10:00 ~ 24:00" },
  { id: 5, tagId: 5, content: "10:00 ~ 20:00" },
  { id: 6, tagId: 6, content: "10:00 ~ 21:00" },
]

// 도서관 외부 부스 정보
const infoData_Out2 = [
  { id: 1, tagId: 1, content: "10:00 ~ 20:00" },
  { id: 2, tagId: 2, content: "10:00 ~ 21:00" },
  { id: 3, tagId: 3, content: "10:00 ~ 22:00" },
  { id: 4, tagId: 4, content: "10:00 ~ 24:00" },
  { id: 5, tagId: 5, content: "10:00 ~ 20:00" },
  { id: 6, tagId: 6, content: "10:00 ~ 21:00" },
]

export {
  tagData,
  tagData_food,
  tagData_Out,
  tagData_Out2,
  infoData,
  infoData_food,
  infoData_Out,
  infoData_Out2,
}
