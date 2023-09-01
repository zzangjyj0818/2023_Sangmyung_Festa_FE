// CreatorList.jsx
import React, { useState } from 'react'; 
import CreatorItem from './CreatorItem';
import '../../../styles/components/CreatorPage/CreatorList.scss';
import hdh from '../../../assets/CreatorPage/hdh.jpeg';
import jyj from '../../../assets/CreatorPage/jyj.jpeg';
import khs from'../../../assets/CreatorPage/khs.png';
import kjm from '../../../assets/CreatorPage/kjm.jpeg';
import kms from '../../../assets/CreatorPage/kms.jpeg';
import ksc from '../../../assets/CreatorPage/ksc.jpeg';
import ksj from '../../../assets/CreatorPage/ksj.jpeg';
import ldw from '../../../assets/CreatorPage/ldw.png';
import lhj from '../../../assets/CreatorPage/lhj.png';
import lhjun from '../../../assets/CreatorPage/lhjun.png';
import ljhyeon from'../../../assets/CreatorPage/ljhyeon.png';
import ljw from '../../../assets/CreatorPage/ljw.jpeg';
import lyw from '../../../assets/CreatorPage/lyw.png';
import syj from '../../../assets/CreatorPage/syj.jpeg';
import syj2 from '../../../assets/CreatorPage/syj.png';
import ylh from'../../../assets/CreatorPage/ylh.svg';


const sampleCreators1 = [ //총학
    {
        image: ldw, 
        name: '이도원', 
        department: '기획 총괄', 
        major: '글로벌금융경영학부', 
        studentId: '20학번'
    },
    {
        image: syj, 
        name: '손예진', 
        department: '기획 부총괄', 
        major: '식물식품공학과', 
        studentId: '22학번'
    },
];

const sampleCreators2 = [ //개발
    {
        image: lhj, 
        name: '이현제', 
        department: '프로젝트 총괄', 
        major: '소프트웨어학과', 
        studentId: '18학번'
    },
    {
        image: hdh, 
        name: '한다희', 
        department: '프로젝트 부총괄', 
        major: '식물식품공학과', 
        studentId: '21학번'
    },
    {
        image: ksj, 
        name: '곽상진', 
        department: '개발 총괄', 
        major: '소프트웨어학과', 
        studentId: '20학번'
    },
    {
        image: jyj, 
        name: '정연재', 
        department: 'FE 팀장', 
        major: '소프트웨어학과', 
        studentId: '20학번'
    },
    {
        image: ksc, 
        name: '김승찬', 
        department: 'FE 팀원', 
        major: '소프트웨어학과', 
        studentId: '19학번'
    },
    {
        image: lhjun, 
        name: '임형준', 
        department: 'FE 팀원', 
        major: '소프트웨어학과', 
        studentId: '19학번'
    },
    {
        image: kjm, 
        name: '김지민', 
        department: 'FE 팀원', 
        major: '휴먼지능로봇공학과', 
        studentId: '20학번'
    },
    {
        image: lyw, 
        name: '이용우', 
        department: 'BE 팀장', 
        major: '전자공학과', 
        studentId: '18학번'
    },
    {
        image: kms, 
        name: '김민석', 
        department: 'BE 팀원', 
        major: '스마트정보통신학과', 
        studentId: '19학번'
    },
];

const sampleCreators3 = [ //커디
    {
        image: khs, 
        name: '김형섭', 
        department: '디자인 총괄', 
        major: '소프트웨어학과', 
        studentId: '18학번'
    },
    {
        image: ljhyeon, 
        name: '이주헌', 
        department: '디자인 팀장', 
        major: '시각디자인학과', 
        studentId: '18학번'
    },
    {
        image: ylh, 
        name: '유이현', 
        department: '디자인 팀원', 
        major: '시각디자인학과', 
        studentId: '18학번'
    },
    {
        image: ljw, 
        name: '이지우', 
        department: '디자인 팀원', 
        major: '커뮤니케이션디자인학부', 
        studentId: '20학번'
    },
    {
        image: syj2, 
        name: '서유진', 
        department: '디자인 팀', 
        major: '커뮤니케이션디자인학부', 
        studentId: '21학번'
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
    '커디': '디자인 SMU'
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


