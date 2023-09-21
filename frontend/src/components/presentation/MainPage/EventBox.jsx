import React from 'react';

const EventBox = ({detail, handleEventBoxClick}) => {
    return (
        <div className="event_box" onClick={handleEventBoxClick}>
            {detail.image === undefined ?
                <a href="https://m.youtube.com/watch?v=Ik0dtE_Mx6A&source_ve_path=MTc4NDI0" target="_blank" rel="noreferrer">
                    <div style={{position: 'relative', width: '287px', height: '195px'}}>
                        <img 
                            src={`https://img.youtube.com/vi/Ik0dtE_Mx6A/0.jpg`} 
                            width="287"
                            height="195"
                            style={{borderRadius: '12px'}}
                            alt='Youtube Thumbnail'
                        />
                        <div 
                          style={{
                              position: 'absolute',
                              top: '51%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor:'red',
                              width:'55px',
                              height:'40px',
                              borderRadius:'5px',
                              borderTopRightRadius: '30%',
                              borderBottomRightRadius: '30%',
                              borderTopLeftRadius: '30%',
                              borderBottomLeftRadius: '30%'
                          }}
                        />
                        <div 
                          style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-35%, -35%)', 
                              width: 0,
                              height: 0,
                              borderTop:'8px solid transparent',
                              borderBottom:'8px solid transparent',
                              borderLeft:'16px solid white'
                          }}
                        />
                    </div>
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
            {detail.boolDirection && <div className={"arrow_detail"}>{`>`}</div>}
        </div>
    );
};

export default EventBox;