import React from 'react';

import '../../../styles/components/AdminPage/DressCodeChange.scss';

const DressCodeChange = ({datas, boxesState, onClick}) => {

    return (
        <div className='DressCodeChange_Container'>
            <div className='DressCodeChange_Wrapper'>
                <div className='DressCodeChange_DataForm'>
                    <div className='DressCodeChange_DataForm_Title'>드레스 코드</div>
                    <div className='DressCodeChange_BoxCollection'>
                        {datas.map(data => 
                        <div 
                            className={boxesState[`state${data.id}`] ? 
                                'DressCodeChange_Wrapper_Box_Active' :
                                'DressCodeChange_Wrapper_Box_UnActive'} 
                            key={data.id}
                            onClick={() => onClick(data.id)}
                        >
                            {data.name}
                        </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DressCodeChange;