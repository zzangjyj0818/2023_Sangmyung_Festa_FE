import React, {useState, useEffect} from 'react';
import AdminPage from '../../../pages/AdminPage';
import { fetchAll } from '../../../api/fetchAll';
import { useQuery } from 'react-query';

const AdminPageContainer = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { data: all, refetch } = useQuery('allState', fetchAll, {
        staleTime: 1000 * 60 * 0.5,
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
