import React from 'react';
import '../../../styles/components/MainPage/CreatorView.scss';


const CreatorBox = ({ title }) => (
    <div className="creator_box">
        <p>{title}</p>
        {/* 여기에 컨텐츠 추가하면될ㄷ듯 */}
    </div>
);

const CreatorView = () => {
    return (
        <div className="Creator_Text">
            <p>🤷 누가 만들었나요?</p>
            <div className="creator_box_container" >
                <CreatorBox title="기획" />
                <CreatorBox title="개발" />
                <CreatorBox title="디자인" />
            </div>
        </div>
    );
};

export default CreatorView;
