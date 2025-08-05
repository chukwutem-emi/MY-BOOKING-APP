
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
import Accordion from "./AccordionItems";
import ElectricalElectronicsRepair from "./EverythingAboutAppointments/TechnicalAndRepairServiceAppointments/ElectricalElectronicsRepairAppointment";
import HomeServiceAppointment from "./EverythingAboutAppointments/TechnicalAndRepairServiceAppointments/HomeServiceAppointment";
import Error from "./Error";
import UpdateUser from "./UpdateUser";
import PromoteUser from "./PromoteUser";



const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AuthForm />,
        errorElement:<Error />
    },
    {
        path:"/",
        element:<AppLayout />,
        children: [

            {
                path:"/browse",
                element:<Browse />,
                errorElement:<Error />
            },
            {
                path:"/user",
                element:<GetUser />,
                errorElement:<Error />
            },
            {
                path:"/users",
                element:<GetAllUsers />,
                errorElement:<Error />
            },
            {
                path:"/academic",
                element:<AcademicAdvising />,
                errorElement:<Error />
            },
            {
                path:"/clear-token",
                element:<ClearToken />,
                errorElement:<Error />
            },
            {
                path:"/career",
                element:<CareerCounseling />,
                errorElement:<Error />
            },
            {
                path:"/tutorial",
                element:<OneOnOneTutoring />,
                errorElement:<Error />
            },
            {
                path:"/consultation",
                element:<HealthCareConsultationAppointment />,
                errorElement:<Error />
            },
            {
                path:"/counseling",
                element:<HealthCareCounselingSessionAppointment />,
                errorElement:<Error />
            },
            {
                path:"/dental",
                element:<HealthCareDentalAppointment />,
                errorElement:<Error />
            },
            {
                path:"/physiotherapy",
                element:<HealthCarePhysiotherapySessionAppointment />,
                errorElement:<Error />
            },
            {
                path:"/vaccination",
                element:<HealthCareVaccinationAppointment />,
                errorElement:<Error />
            },
            {
                path:"/business",
                element:<BusinessConsultationAppointment />,
                errorElement:<Error />
            },
            {
                path:"/financial",
                element:<FinancialAdvisoryAppointment />,
                errorElement:<Error />
            },
            {
                path:"/real-estate",
                element:<RealEstateAgentAppointment />,
                errorElement:<Error />
            },
            {
               path:"/electrical",
               element:<ElectricalElectronicsRepair />,
               errorElement:<Error />
            },
            {
                path:"/home-service",
                element:<HomeServiceAppointment />,
                errorElement:<Error />
            },
            {
                path:"/update-user",
                element:<UpdateUser />,
                errorElement:<Error />
            },
            {
                path:"/promote-user",
                element:<PromoteUser />,
                errorElement:<Error />
            },
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