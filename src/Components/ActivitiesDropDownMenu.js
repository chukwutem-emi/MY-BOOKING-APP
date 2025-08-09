import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { hasUnrecoverableErrors } from "react-refresh";
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
            title : "👥   Fetch-Users",
            link  : "/users"
        },
        {
            title  : "👤   User-Profile",
            link  : "/user"
        },
        {
            title  : "👤 Profile-Update",
            link   : "/update-user"
        },
        {
            title   : "+ Add-AdminUser",
            link    : "/promote-user"
        },
        {
            title   : "🔐 Authentication(Login)",
            link    : "/"
        },
        {
            title   : "💻 Browse Page",
            link    : "/browse"
        },
        {
            title   : "🏫 Academic-Advising Appointment",
            link    : "/academic"
        },
        {
            title   : "🏫 Career-Counseling Appointment",
            link    : "/career"
        },
        {
            title   : "🏫 One-On-One Tutoring Appointment",
            link    : "/tutorial"
        },
        {
            title   : "🏥 Healthcare-Consultation Appointment",
            link    : "/consultation"
        },
        {
            title   : "🏥 Healthcare-Counseling Appointment",
            link    : "/counseling"
        },
        {
            title   : "🏥 Healthcare-Dental Appointment",
            link    : "/dental"
        },
        {
            title   : "🏥 Healthcare-Physiotherapy Appointment",
            link    : "/physiotherapy"
        },
        {
            title   : "🏥 Healthcare-Vaccination Appointment",
            link    : "/vaccination"
        },
        {
            title   : "🧑‍💼 Business-Consultation Appointment",
            link    : "/business"
        },
        {
            title   : "🧑‍💼 Financial-Advisory Appointment",
            link    : "/financial"
        },
        {
            title   : "🧑‍💼Real-Estate-Agent Appointment",
            link    : "/real-estate"
        },
        {
            title   : "🪛🛠️ Electrical/Electronics-Repair Appointment",
            link    : "/electrical"
        },
        {
            title   : "🛠️ Home-Service Appointment",
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
            <button onClick={handleToggle} className="text-white font-extrabold">
                <BsThreeDotsVertical size={30} title="MENU" />
            </button>
            {
                isOpen && (
                    <ul className="absolute bg-black flex flex-col w-[30rem] max-h-[30rem] overflow-y-auto xs:w-[20rem] sm:w-[25rem] md:w-[30rem] lg:[30rem] xl:[30rem] right-0 mt-2 rounded-lg shadow-md z-50 space-y-3 opacity-85 p-2">
                        {
                            content.map((item) => (
                                <li key={item.title} className="px-4 py-2 text-white hover:bg-gray-700 font-bold font-sans xs:text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg">
                                    <Link to={item.link} className="hover:animate-pulse w-full h-full">{item.title}
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