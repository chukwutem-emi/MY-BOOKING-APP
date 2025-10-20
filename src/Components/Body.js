import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Browse from "./Browse";
import AppLayout from "./AppLayout"
import Error from "./Error";
import Spinner from "../Utils/Spinner";


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
const ElectricalElectronics = lazy(() => import("./SubComponent/ElectricalElectronicsRepair"));
const UpdateUser = lazy(() => import("./SubComponent/UpdateUser"));
const DeleteUser = lazy(() => import("./SubComponent/DeleteUserSubComponent"));
const DeleteAllUsers = lazy(() => import("./SubComponent/DeleteAllUserSubComponent"));
const PromoteUser = lazy(() => import("./SubComponent/PromoteUserSubComponent"));
const DeletePersonnelInfo = lazy(() => import("./SubComponent/DeletePersonnelInfoSubComponent"));
const GetAllPersonnel = lazy(() => import("./SubComponent/GetAllPersonnelSubComponent"));
const UpdatePersonnelInfo = lazy(() => import("./SubComponent/UpdatePersonnelInfoSubComponent"));
const UploadPersonnelInfo = lazy(() => import("./SubComponent/UploadPersonnelSubComponent"));
const DeleteAppointment = lazy(() => import("./SubComponent/DeleteAppointmentSubComponent"));
const GetUserAppointment = lazy(() => import("./SubComponent/GetUserAppointmentSubComponent"));
const UpdateUserAppointment = lazy(() => import("./SubComponent/UpdateAppointmentDetailsSubComponent"));
const GetAllUsersAppointment = lazy(() => import("./SubComponent/GetAllAppointmentSubComponent"));

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
                element:<Suspense fallback={<Spinner />}><UpdateUser /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/promote-user",
                element:<Suspense fallback={<Spinner />}><PromoteUser /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/delete-user",
                element:<Suspense fallback={<Spinner />}><DeleteUser /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/delete-all-users",
                element:<Suspense fallback={<Spinner />}><DeleteAllUsers /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/delete-personnel",
                element:<Suspense fallback={<Spinner />}><DeletePersonnelInfo /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/all-personnel",
                element:<Suspense fallback={<Spinner />}><GetAllPersonnel /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/update-personnel",
                element:<Suspense fallback={<Spinner />}><UpdatePersonnelInfo /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/upload-personnel",
                element:<Suspense fallback={<Spinner />}><UploadPersonnelInfo /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/delete-appointment",
                element:<Suspense fallback={<Spinner />}><DeleteAppointment /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/user-appointment",
                element:<Suspense fallback={<Spinner />}><GetUserAppointment /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/users-appointment",
                element:<Suspense fallback={<Spinner />}><GetAllUsersAppointment /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/update-appointment",
                element:<Suspense fallback={<Spinner />}><UpdateUserAppointment /></Suspense>,
                errorElement:<Error />
            },
        ]
    },
]);
const Body = () => {
    
    return (
        <div className="w-full h-dvh overflow-x-hidden">
            <RouterProvider router={appRouter}/>
        </div>
    )
};
export default Body;