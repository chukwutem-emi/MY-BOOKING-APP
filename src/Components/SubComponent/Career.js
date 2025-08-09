import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import CareerCounseling from "../EverythingAboutAppointments/EducationAndTutoringAppointment/CareerCounseling";


const Career = () => {
    const[isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const careerTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(careerTimer);
    }, [])
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <CareerCounseling />
            }
        </div>
    );
};
export default Career;