import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreatorBox from '../../presentation/MainPage/CreatorBox';

const CreatorBoxContainer = ({title, description, image}) => {
    const navigate = useNavigate();
    const splitTitle = title.split(' ');

    const handleOnClick = () => {
      window.scrollTo(0, 0);
        if (title === "Switch 총학생회") {
            navigate('/creator/총학');
        } else if (title === "멋쟁이 사자처럼") {
            navigate('/creator/멋사');
        } else if (title === "커뮤니케이션 디자인전공") {
            navigate('/creator/커디');
        }
    };
    return (
        <CreatorBox
            title = {title}
            description={description}
            image={image}
            splitTitle={splitTitle}
            handleOnClick={handleOnClick}
        />
    );
};

export default CreatorBoxContainer;