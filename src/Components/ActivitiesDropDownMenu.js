import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const ActivitiesDropDownMenu = () => {
    const[isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef();


    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    const content = [
        {
            title   : "Home Page",
            link    : "/browse"
        },
        {
            title  : "User Profile",
            link  : "/user"
        },
        {
            title  : "Profile Update",
            link   : "/update-user"
        },
        {
            title : "Fetch Users",
            link  : "/users"
        },
        {
            title  : "Delete-user",
            link   : "/delete-user"
        },
        {
            title : "Delete all users",
            link  : "/delete-all-users"
        },
        {
            title   : "+ Add AdminUser",
            link    : "/promote-user"
        },
        {
            title   : "Authentication(Login)",
            link    : "/"
        },
        {
            title   : "Delete Personnel Details",
            link    : "/delete-personnel"
        },
        {
            title  : "All-Personnel",
            link   : "/all-personnel"
        },
        {
            title  : "Update PersonnelInfo",
            link   : "/update-personnel"
        },
        {
            title : "Upload Personnel",
            link  : "/upload-personnel"
        },
        {
            title : "Delete Appointment",
            link  : "/delete-appointment"
        },
        {
            title : "Get User Appointment",
            link  : "/user-appointment"
        },
        {
            title : "Get Users Appointment",
            link : "/users-appointment"
        },
        {
            title : "Update Appointment Details",
            link  : "/update-appointment"
        },
        {
            title   : "Academic Advising Appointment",
            link    : "/academic"
        },
        {
            title   : "Career Counseling Appointment",
            link    : "/career"
        },
        {
            title   : "One-On-One Tutoring Appointment",
            link    : "/tutorial"
        },
        {
            title   : "Healthcare Consultation Appointment",
            link    : "/consultation"
        },
        {
            title   : "Healthcare Counseling Appointment",
            link    : "/counseling"
        },
        {
            title   : "Healthcare Dental Appointment",
            link    : "/dental"
        },
        {
            title   : "Healthcare Physiotherapy Appointment",
            link    : "/physiotherapy"
        },
        {
            title   : "Healthcare Vaccination Appointment",
            link    : "/vaccination"
        },
        {
            title   : "Business Consultation Appointment",
            link    : "/business"
        },
        {
            title   : "Financial Advisory Appointment",
            link    : "/financial"
        },
        {
            title   : "Real-Estate-Agent Appointment",
            link    : "/real-estate"
        },
        {
            title   : "Elect/Elect-Repair Appointment",
            link    : "/electrical"
        },
        {
            title   : "Home-Service Appointment",
            link    : "/home-service"
        },

    ];
    const handleClickOutside = (e) => {
        if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    };

    const handleToggle = () => setIsOpen(!isOpen);
    return (
        <div ref={dropDownRef} className="relative mt-[2rem]">
            <button onClick={handleToggle} className="text-white mr-[1rem] font-extrabold hover:text-black hover:bg-white outline-none">
                <BsThreeDotsVertical size={30} title="SIDE-BAR" />
            </button>
            {
                isOpen && (
                    <ul className="absolute bg-gradient-to-r from-indigo-600 to-cyan-400 text-left flex flex-col w-[20rem] max-h-[30rem] overflow-y-auto xs:w-[20rem] sm:w-[25rem] md:w-[30rem] lg:[30rem] xl:[30rem] right-0 mt-2 rounded-lg shadow-md z-50 space-y-3 p-2">
                        {
                            content.map((item) => (
                                <li key={item.title} className="px-4 py-2 text-white hover:bg-cyan-400 hover:shadow-2xl hover:z-50 font-bold font-sans xs:text-[0.5rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem]">
                                    <Link to={item.link} className="hover:animate-pulse w-full h-full" onClick={handleToggle}>{item.title}
                                    </Link>
                                </li>
                            ))
                        }  
                    </ul>
                )
            }
        </div>
    )
};
export default ActivitiesDropDownMenu;