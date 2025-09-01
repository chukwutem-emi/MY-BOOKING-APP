import React, { useEffect, useState } from 'react'
import BigSpinner from '../../Utils/BigSpinner';
import DeletePersonnelInfo from '../../PersonnelCrudOperation/DeletePersonnelInfo';

const DeletePersonnelInfoSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const DeletePersonnelInfoTimer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(DeletePersonnelInfoTimer);
    }, []);
  return (
    <div className="flex items-center justify-center mt-[8rem]">
      {
        loading ? <BigSpinner /> : <DeletePersonnelInfo />
      }
    </div>
  );
};
export default DeletePersonnelInfoSubComponent;
