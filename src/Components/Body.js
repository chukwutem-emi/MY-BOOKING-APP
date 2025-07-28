
import AuthForm from "./Authentication/AuthForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Browse from "./Browse";
import GetUser from "./GetUser";
import GetAllUsers from "./GetAllUsers";
import AppLayout from "./AppLayout"
import AcademicAdvising from "./EverythingAboutAppointments/EducationAndTutoringAppointment/AcademicAdvising"
import ClearToken from "./ClearToken";
import CareerCounseling from "./EverythingAboutAppointments/EducationAndTutoringAppointment/CareerCounseling";
import OneOnOneTutoring from "./EverythingAboutAppointments/EducationAndTutoringAppointment/OneOnOneTutoringSession";
import HealthCareConsultationAppointment from "./EverythingAboutAppointments/HealthCareAppointments/HealthCareConsultationAppointment";
import HealthCareCounselingSessionAppointment from "./EverythingAboutAppointments/HealthCareAppointments/HealthCareCounselingSessionAppointment";
import HealthCareDentalAppointment from "./EverythingAboutAppointments/HealthCareAppointments/HealthCareDentalAppointment";
import HealthCarePhysiotherapySessionAppointment from "./EverythingAboutAppointments/HealthCareAppointments/HealthCarePhysiotherapySessionAppointment";
import HealthCareVaccinationAppointment from "./EverythingAboutAppointments/HealthCareAppointments/HealthCareVaccinationAppointment";
import BusinessConsultationAppointment from "./EverythingAboutAppointments/ProfessionalServiceAppointment/BusinessConsultationAppointment";
import FinancialAdvisoryAppointment from "./EverythingAboutAppointments/ProfessionalServiceAppointment/FinancialAdvisoryAppointment";
import RealEstateAgentAppointment from "./EverythingAboutAppointments/ProfessionalServiceAppointment/RealEstateAgentAppointment";



const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AuthForm />
    },
    {
        path:"/",
        element:<AppLayout />,
        children: [

            {
                path:"/browse",
                element:<Browse />
            },
            {
                path:"/user",
                element:<GetUser />
            },
            {
                path:"/users",
                element:<GetAllUsers />
            },
            {
                path:"/academic",
                element:<AcademicAdvising />
            },
            {
                path:"/clear-token",
                element:<ClearToken />
            },
            {
                path:"/career",
                element:<CareerCounseling />
            },
            {
                path:"/tutorial",
                element:<OneOnOneTutoring />
            },
            {
                path:"/consultation",
                element:<HealthCareConsultationAppointment />
            },
            {
                path:"/counseling",
                element:<HealthCareCounselingSessionAppointment />
            },
            {
                path:"/dental",
                element:<HealthCareDentalAppointment />
            },
            {
                path:"/physiotherapy",
                element:<HealthCarePhysiotherapySessionAppointment />
            },
            {
                path:"/vaccination",
                element:<HealthCareVaccinationAppointment />
            },
            {
                path:"/business",
                element:<BusinessConsultationAppointment />
            },
            {
                path:"/financial",
                element:<FinancialAdvisoryAppointment />
            },
            {
                path:"/real-estate",
                element:<RealEstateAgentAppointment />
            },
            {
                
            }
        ]
    },
]);
const Body = () => {
    
    return (
        <div className="w-full h-dvh">
            <RouterProvider router={appRouter}/>
        </div>
    )
};
export default Body;