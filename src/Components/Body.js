
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