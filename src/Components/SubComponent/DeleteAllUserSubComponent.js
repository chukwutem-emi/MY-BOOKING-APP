import React, { useEffect, useState } from 'react'
import BigSpinner from '../../Utils/BigSpinner';
import DeleteAllUsers from '../DeleteAllUsers';

const DeleteAllUserSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const deleteAllUsersTimer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(deleteAllUsersTimer);
    }, []);

  return (
    <div className="flex items-center justify-center mt-[8rem]">
      {
        loading ? <BigSpinner /> : <DeleteAllUsers />
      }
    </div>
  );
};
export default DeleteAllUserSubComponent;
