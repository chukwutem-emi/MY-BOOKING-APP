import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import AcademicAdvising from "../EverythingAboutAppointments/EducationAndTutoringAppointment/AcademicAdvising";

const Academic = () => {
    const[isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const academicTimer = setTimeout(() => {
            setIsLoading(false)
        }, 4000);
        return () => clearTimeout(academicTimer);
    }, [])
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <AcademicAdvising />
            }
        </div>
    );
};
export default Academic;