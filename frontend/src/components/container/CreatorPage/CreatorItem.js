// CreatorItem.jsx
import React from 'react';
import '../../../styles/components/CreatorPage/CreatorItem.scss';

const CreatorItem = ({ creator }) => {
   const {image, name, department, major, studentId} = creator;

   return (
    <div className="CreatorItemBlock">
        <div className="thumbnail">
            <img src={image} alt=''/>
        </div>
        <div className="info">
            <div className="name">
                {name}
            </div>
            <div className="department">
                {department}
            </div>
            <div className="majorAndStudentId"> 
                <div className="major"> 
                    {major}
                </div>
                <div className="studentId">
                    {studentId}
                </div>
            </div>
        </div>
    </div>


   );
};

export default CreatorItem;


