import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import GetAllPersonnel from "../../PersonnelCrudOperation/GetAllPersonnel";

const GetAllPersonnelSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllPersonnelTimer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(getAllPersonnelTimer);
    }, []);
  return (
    <div className="flex items-center justify-center mt-[8rem]">
      {
        loading ? <BigSpinner /> : <GetAllPersonnel />
      }
    </div>
  );
};
export default GetAllPersonnelSubComponent;
