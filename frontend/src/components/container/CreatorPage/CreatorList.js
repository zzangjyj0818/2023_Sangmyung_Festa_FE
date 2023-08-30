// CreatorList.jsx
import React, { useState } from 'react'; 
import CreatorItem from './CreatorItem';
import Logo from '../../../assets/Logo.png';
import '../../../styles/components/CreatorPage/CreatorList.scss';


const sampleCreators1 = [ //총학
    {
        image: Logo, 
        name: '이도원', 
        department: '기획 팀장', 
        major: '소프트웨어학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '손예진', 
        department: '기획팀', 
        major: '소프트웨어학과', 
        studentId: '202021349'
    }
];

const sampleCreators2 = [ //멋사
    {
        image: Logo, 
        name: '정연재', 
        department: '프론트앤드 팀장', 
        major: '소프트웨어학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '김승찬', 
        department: '프론트앤드 팀', 
        major: '소프트웨어학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '임형준', 
        department: '프론트앤드 팀', 
        major: '소프트웨어학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '김지민', 
        department: '프론트앤드 팀', 
        major: '휴먼지능로봇공학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '이현제', 
        department: '백앤드 팀장', 
        major: '소프트웨어학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '곽상진', 
        department: '백앤드 팀', 
        major: '소프트웨어학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '이용우', 
        department: '백엔드 팀', 
        major: '전자공학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '김민석', 
        department: '백앤드 팀', 
        major: '스마트정보통신공학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '김형섭', 
        department: '백앤드 팀', 
        major: '소프트웨어학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '한다희', 
        department: '디자인 팀', 
        major: '휴먼지능로봇공학과', 
        studentId: '202021349'
    },
];

const sampleCreators3 = [ //커디
    {
        image: Logo, 
        name: '이주헌', 
        department: '디자인 팀장', 
        major: '시각디자인학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '유이현', 
        department: '디자인 팀', 
        major: '시각디자인학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '이지우', 
        department: '디자인 팀', 
        major: '커뮤니케이션디자인학과', 
        studentId: '202021349'
    },
    {
        image: Logo, 
        name: '서유진', 
        department: '디자인 팀', 
        major: '커뮤니케이션디자인학과', 
        studentId: '202021349'
    }
];

const categories = [
    { name: '총학', creators: sampleCreators1 },
    { name: '멋사', creators: sampleCreators2 },
    { name: '커디', creators: sampleCreators3 },
];


const categoryDescriptions = {
    '총학': '상명대학교 Switch 총학생회',
    '멋사': '상명대학교 멋쟁이사자처럼 11기',
    '커디': '커뮤니케이션 디자인 전공'
};  

  const CreatorList = () => {
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
    return (
        <div className='Creator'>
            <div className="category-selector">
                {categories.map((category) => (
                    <button className={`category-button ${currentCategory.name === category.name ? "selected" : ""}`}
                        key={category.name} onClick={() => setCurrentCategory(category)}>
                        {category.name}
                    </button>
                ))}
            </div>
            
            <div className="Descriptions">
            <p>{categoryDescriptions[currentCategory.name]}</p>
            </div>
            
            <div className="CreatorListBlock">
                {currentCategory.creators.map((creator,index) => (
                    <CreatorItem key={index} creator={creator}/>
                ))}
            </div>
        </div>
     );
  }
  
  export default CreatorList;



