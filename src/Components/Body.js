import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Browse from "./Browse";
import AppLayout from "./AppLayout"
import BusinessConsultationAppointment from "./EverythingAboutAppointments/ProfessionalServiceAppointment/BusinessConsultationAppointment";
import FinancialAdvisoryAppointment from "./EverythingAboutAppointments/ProfessionalServiceAppointment/FinancialAdvisoryAppointment";
import RealEstateAgentAppointment from "./EverythingAboutAppointments/ProfessionalServiceAppointment/RealEstateAgentAppointment";
import ElectricalElectronicsRepair from "./EverythingAboutAppointments/TechnicalAndRepairServiceAppointments/ElectricalElectronicsRepairAppointment";
import HomeServiceAppointment from "./EverythingAboutAppointments/TechnicalAndRepairServiceAppointments/HomeServiceAppointment";
import Error from "./Error";
import UpdateUser from "./UpdateUser";
import PromoteUser from "./PromoteUser";
import DeleteUser from "./DeleteUser";
import Spinner from "../Utils/Spinner";
import WelcomePage from "../Utils/WelcomePage";


const FetchUsers = lazy(() => import("./SubComponent/Users"));
const FetchUser = lazy(() => import("./SubComponent/User"));
const AcademicAdvising = lazy(() => import("./SubComponent/Academic"));
const Authentication = lazy(() => import("./SubComponent/Authentication"));
const ClearToken = lazy(() => import("./ClearToken"));
const CareerCounseling = lazy(() => import("./SubComponent/Career"));
const OneOnOneTutoring = lazy(() => import("./SubComponent/Tutorial"));
const HealthCareConsultation = lazy(() => import("./SubComponent/HealthCareConsultation"));
const HealthCareCounseling = lazy(() => import("./SubComponent/HealthCareCounselingSession"));
const HealthCareDental = lazy(() => import("./SubComponent/HealthCareDental"));
const HealthCarePhysiotherapy = lazy(() => import("./SubComponent/HealthCarePhysiotherapy"));
const HealthCareVaccination = lazy(() => import("./SubComponent/HealthCareVaccination"));
const BusinessConsultation = lazy(() => import("./SubComponent/BusinessConsultation"));
const FinancialAdvisory = lazy(() => import("./SubComponent/FinancialAdvisory"));
const RealEstateAgent = lazy(() => import("./SubComponent/RealEstateAgent"));
const HomeService = lazy(() => import("./SubComponent/HomeService"));
const ElectricalElectronics = lazy(() => import("./SubComponent/ElectricalElectronicsRepair"))

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Suspense fallback={<Spinner />}><Authentication /></Suspense>,
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
                element:<Suspense fallback={<Spinner />}><FetchUser /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/users",
                element:<Suspense fallback={<Spinner />}><FetchUsers /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/academic",
                element:<Suspense fallback={<Spinner />}><AcademicAdvising /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/clear-token",
                element:<Suspense fallback={<Spinner />}><ClearToken /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/career",
                element:<Suspense fallback={<Spinner />}><CareerCounseling /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/tutorial",
                element:<Suspense fallback={<Spinner />}><OneOnOneTutoring /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/consultation",
                element:<Suspense fallback={<Spinner />}><HealthCareConsultation /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/counseling",
                element:<Suspense fallback={<Spinner />}><HealthCareCounseling /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/dental",
                element:<Suspense fallback={<Spinner />}><HealthCareDental /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/physiotherapy",
                element:<Suspense fallback={<Spinner />}><HealthCarePhysiotherapy /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/vaccination",
                element:<Suspense fallback={<Spinner />}><HealthCareVaccination /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/business",
                element:<Suspense fallback={<Spinner />}><BusinessConsultation /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/financial",
                element:<Suspense fallback={<Spinner />}><FinancialAdvisory /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/real-estate",
                element:<Suspense fallback={<Spinner />}><RealEstateAgent /></Suspense>,
                errorElement:<Error />
            },
            {
               path:"/electrical",
               element:<Suspense fallback={<Spinner />}><ElectricalElectronics /></Suspense>,
               errorElement:<Error />
            },
            {
                path:"/home-service",
                element:<Suspense fallback={<Spinner />}><HomeService /></Suspense>,
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
            {
                path:"/delete-user",
                element:<DeleteUser />,
                errorElement:<Error />
            },
            {
                path:"/big-spinner",
                element:<WelcomePage />
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