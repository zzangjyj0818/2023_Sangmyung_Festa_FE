// src/components/container/InformationPage/informationfcn.jsx
import React, { useState } from "react"
import { useSelectedTag } from "./SelectedTagContext"
import Informationfcn from "../../presentation/InformationPage/Informationfcn";

const InformationfcnContainer = () => {
  const { selectedTag, setSelectedTag, updateSelectedTag } = useSelectedTag();
  const [menuInfo, setMenuInfo] = useState(true) //메뉴 상태관리 추가

  const onClickSelButton = (buttonName) => {
    if (selectedTag === buttonName) {
      return;
    }
    setSelectedTag((prev) => (prev === buttonName ? "design" : buttonName))
    updateSelectedTag(buttonName) // 선택된 태그 업데이트
    setMenuInfo(true) // 메뉴 상태 관리
  }

  return (
    <Informationfcn 
      selectedTag={selectedTag}
      onClickSelButton={onClickSelButton}
    />
  )
}

export default InformationfcnContainer;
