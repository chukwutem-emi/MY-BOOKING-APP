import React, { useEffect, useState } from 'react'
import BigSpinner from '../../Utils/BigSpinner';
import PromoteUser from '../PromoteUser';

const PromoteUserSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const promoteUserTimer = setTimeout(() => {
            setLoading(false)
        }, 4000);
        return () => clearTimeout(promoteUserTimer);
    }, []);
  return (
    <div className="flex items-center justify-center mt-[8rem]">
      {
        loading ? <BigSpinner /> : <PromoteUser />
      }
    </div>
  )
};
export default PromoteUserSubComponent;
