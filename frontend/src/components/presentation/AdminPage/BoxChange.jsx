import React from 'react';
import '../../../styles/components/AdminPage/BoxChange.scss';



const BoxChange = ({datas, boxesState, onClick}) => {

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
