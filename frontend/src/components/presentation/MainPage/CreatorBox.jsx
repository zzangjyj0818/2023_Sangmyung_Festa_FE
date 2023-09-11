import React from 'react';

const CreatorBox = ({ title, description, image, splitTitle, handleOnClick }) => {
    return (
        <div className="creator_box" onClick={handleOnClick}>
            <div className="box_title">
                {splitTitle.map((word, index) => (
                    <div key={index} style={{width : '70px'}}>
                        {word}
                        {index !== splitTitle.length - 1 && <br />}
                    </div>
                ))}
            </div>
            <p className="arrow_position"> {description}</p>  
            <img className="image_position" style={{width:'92px', height:'41px'}} src={image} alt={title} />
        </div>
    );
};

export default CreatorBox;