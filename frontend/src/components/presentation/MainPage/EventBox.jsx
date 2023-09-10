import React from 'react';

const EventBox = ({detail, handleEventBoxClick, thumbnailUrl}) => {
    return (
        <div className="event_box" onClick={handleEventBoxClick}>
            {detail.image === undefined ?
                <a href = {detail.url} target = '_blank' rel='noreferrer'>
                    <img src={thumbnailUrl} alt=''/>
                </a> :
                <div>
                    <img src={detail.image} alt=''/>
                </div>
            }
            <div className="text_detail">
                {detail.title && <p className="title_detail">{detail.title}</p>}
                {detail.first && <p className="first_detail">{detail.first}</p>}
                {detail.second && <p className="second_detail">{detail.second}</p>}
            </div>
            {detail.boolDirection && <div className="arrow_detail">{`>`}</div>}
        </div>
    );
};

export default EventBox;