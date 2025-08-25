import React, { useEffect, useRef, useState } from "react";
import { EDUCATIONAL_APPOINTMENT_PERSONNEL } from "../Utils/constants";


const EducationCustomDropDown = ({handleSelected}) => {
    const[isOpen, setIsOpen]     = useState(false);
    const[selected, setSelected] = useState("")

    const dropDownRef = useRef();

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setIsOpen(false);
        };
    };
    const handleSelect = (id, name) => {
        setSelected(name);
        handleSelected({target:{value:id}});
        setIsOpen(false);
    }
    const handleToggleDropDown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="relative w-[90%] xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]" ref={dropDownRef}>
            {/* Closed state */}
            <button type="button" onClick={handleToggleDropDown} className="w-full p-1 hover:bg-blue-600 outline-none animate-pulse rounded-xl font-bold bg-blue-950 text-white text-lg xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem]">
                {selected || "Select appointment personnel"}
                <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
            </button>
            {/* open state */}
            {
                isOpen && (
                    <>
                    <label htmlFor="name" className="sr-only">Appointment Personnel Name</label>
                    <ul id="name" className="w-full absolute  bg-black opacity-80 shadow-lg rounded-md mt-1 z-20 h-20 overflow-y-auto">
                        {
                            EDUCATIONAL_APPOINTMENT_PERSONNEL.map((personnel) => (
                                <li key={personnel.identifier} onClick={() => handleSelect(personnel.identifier, personnel.name)} className="text-white hover:bg-gray-700 cursor-pointer px-4 py-2 hover:text-yellow-600">
                                    {personnel.name}
                                </li>
                            ))
                        }
                    </ul>
                    </>
                )
            }
        </div>
    )
};
export default EducationCustomDropDown;