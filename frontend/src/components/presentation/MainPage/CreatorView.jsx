import React from "react"
import "../../../styles/components/MainPage/CreatorView.scss"
import likelionImage from "../../../assets/MainPage/likelion.png"
import DesignImage from "../../../assets/MainPage/design.png"
import SchoolImage from "../../../assets/MainPage/School.png"
import { useNavigate } from 'react-router-dom';

const CreatorBox = ({ title, description, image }) => {
    const Navigate = useNavigate();
    const splitTitle = title.split(' ');

    const handleClick = () => {
        if (title === "Switch 총학생회") {
            Navigate('/creator/총학');
            window.scrollTo(0, 0);
        } else if (title === "멋쟁이 사자처럼") {
            Navigate('/creator/멋사');
            window.scrollTo(0, 0);
        } else if (title === "커뮤니케이션 디자인전공") {
            Navigate('/creator/커디');
            window.scrollTo(0, 0);
        }
    };
    return (
        <div className="creator_box" onClick={handleClick}>
            <p className="box_title">
                {splitTitle.map((word, index) => (
                    <div key={index} style={{width : '70px'}}>
                        {word}
                        {index !== splitTitle.length - 1 && <br />}
                    </div>
                ))}
            </p>
            <p className="arrow_position"> {description}</p>  
            <img className="image_position" style={{width:'92px', height:'41px'}} src={image} alt={title} />
        </div>
    );
};

const CreatorView = () => {
  return (
    <div className="CreatorView_Container">
      <div className="Creator_Text">
        <p>🤷 누가 만들었나요?</p>
      </div>
      <div className="creator_box_container">
        <CreatorBox
          title="Switch 총학생회"
          description=">"
          image={SchoolImage}
        />
        <CreatorBox
          title="멋쟁이 사자처럼"
          description=">"
          image={likelionImage}
        />
        <CreatorBox
          title="커뮤니케이션 디자인전공"
          description=">"
          image={DesignImage}
        />
      </div>
    </div>
  )
}

export default CreatorView
