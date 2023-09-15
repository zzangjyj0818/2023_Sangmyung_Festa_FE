import React, {useState} from 'react';
import AdminPage from '../../../pages/AdminPage';
import { fetchAll } from '../../../api/fetchAll';
import { useQuery } from 'react-query';

const AdminPageContainer = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { data: all, refetch } = useQuery('allState', fetchAll, {
        staleTime: 1000 * 60 * 0.05 // 캐시된 데이터가 5분 동안 신선한 상태로 유지됩니다.
      });

    return (
        <AdminPage 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            all = {all}
        />
    );
};

export default AdminPageContainer;