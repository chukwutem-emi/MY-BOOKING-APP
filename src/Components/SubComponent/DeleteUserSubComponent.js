import React, { useEffect, useState } from 'react'
import BigSpinner from '../../Utils/BigSpinner';
import DeleteUser from '../DeleteUser';

const DeleteUserSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const deleteUserTimer = setTimeout(() => {
            setLoading(false)
        }, 4000);
        return () => clearTimeout(deleteUserTimer);
    }, []);
  return (
    <div className="flex items-center justify-center mt-[8rem]">
      {
        loading ? <BigSpinner /> : <DeleteUser />
      }
    </div>
  );
};
export default DeleteUserSubComponent;
