import React from "react"
import CreatorBoxContainer from "../../container/MainPage/CreatorBoxContainer"
import "../../../styles/components/MainPage/CreatorView.scss"
import likelionImage from "../../../assets/MainPage/likelion.webp"
import DesignImage from "../../../assets/MainPage/design.webp"
import SchoolImage from "../../../assets/MainPage/School.webp"

const CreatorView = () => {
  return (
    <div className="CreatorView_Container">
      <div className="CreatorView_Wrapper">
        <div className="Creator_Text">
          <p>🤷 누가 만들었나요?</p>
        </div>
        <div className="creator_box_container">
          <CreatorBoxContainer
            title="Switch 총학생회"
            description=">"
            image={SchoolImage}
          />
          <CreatorBoxContainer
            title="멋쟁이 사자처럼"
            description=">"
            image={likelionImage}
          />
          <CreatorBoxContainer
            title="커뮤니케이션 디자인전공"
            description=">"
            image={DesignImage}
          />
      </div>
      </div>
    </div>
  )
}

export default CreatorView
