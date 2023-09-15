import React, {useState} from 'react';
import { postDressCode } from '../../../api/postDressCode';
import { useMutation } from 'react-query';
import '../../../styles/components/AdminPage/DressCodeChange.scss';

const datas = [
    {
        id : 1,
        name : '야광봉'
    },
    {
        id : 2,
        name : '타투 스티커'
    },
]

const DressCodeChange = ({dress1, dress2}) => {

    const [boxesState, setBoxesState] = useState({
        state1: dress1,
        state2: dress2,
    });
  
    const mutation = useMutation(postDressCode,{
        onSuccess: (data) => {
            console.log('success')
        },
        onError: () => {
        }
      });

    const onClick = (id) => {
        setBoxesState(prevState => ({
            ...prevState,
            [`state${id}`]: !prevState[`state${id}`]
        }));
        mutation.mutate({idx: id});
    }

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