import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import OneOnOneTutoring from "../EverythingAboutAppointments/EducationAndTutoringAppointment/OneOnOneTutoringSession";

const Tutorial = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const tutorialTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(tutorialTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <OneOnOneTutoring />
            }
        </div>
    );
};
export default Tutorial;