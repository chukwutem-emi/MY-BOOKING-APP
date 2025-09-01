import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import UploadPersonnel from "../../PersonnelCrudOperation/UploadPersonnel";

const UploadPersonnelSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const uploadPersonnelTimer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(uploadPersonnelTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                loading ? <BigSpinner /> : <UploadPersonnel />
            }
        </div>
    );
};
export default UploadPersonnelSubComponent;