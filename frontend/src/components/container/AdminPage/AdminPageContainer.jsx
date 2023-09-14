import React, {useState} from 'react';
import AdminPage from '../../../pages/AdminPage';

const AdminPageContainer = () => {
    const [isOpen, setIsOpen] = useState(true);
    console.log(isOpen)

    return (
        <AdminPage isOpen={isOpen} setIsOpen={setIsOpen} />
    );
};

export default AdminPageContainer;