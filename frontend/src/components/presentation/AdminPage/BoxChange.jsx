import React, { useState } from 'react';
import '../../../styles/components/AdminPage/BoxChange.scss';

const datas = [
    {
        id : 1,
        name : 'BOX1'
    },
    {
        id : 2,
        name : 'BOX2'
    },
    {
        id : 3,
        name : 'BOX3'
    },
    {
        id : 4,
        name : 'BOX4'
    },
]

const BoxChange = ({box1, box2, box3, box4}) => {

  const [boxesState, setBoxesState] = useState({
      state1: box1,
      state2: box2,
      state3: box3,
      state4: box4
  });

  const onClick = (id) => {
      setBoxesState(prevState => ({
          ...prevState,
          [`state${id}`]: !prevState[`state${id}`]
      }));
  }

  return (
      <div className='BoxChange_Container'>
          <div className='BoxChange_Wrapper'>
              <div className='BoxChange_Wrapper_Title'>
                  <div style={{width : '80px'}}>보물 찾기</div>
                  <div className='small_title'>Click <span style={{color : 'blue'}}>on</span>/off</div>
              </div>
              <div className='BoxChange_Wrapper_Box_Collection'>
                  {datas.map(data => 
                      <div 
                          className={boxesState[`state${data.id}`] ? 
                              'BoxChange_Wrapper_Box_Active' :
                              'BoxChange_Wrapper_Box_UnActive'} 
                          key={data.id}
                          onClick={() => onClick(data.id)}
                      >
                          {data.name}
                      </div>)
                  }
              </div>
          </div>
      </div>
   );
};

export default BoxChange;
