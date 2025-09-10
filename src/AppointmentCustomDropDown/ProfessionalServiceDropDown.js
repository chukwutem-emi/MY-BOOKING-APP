import React, { useEffect, useRef, useState } from "react";
import { PROFESSIONAL_SERVICE_APPOINTMENT_PERSONNEL } from "../Utils/constants";


const ProfessionalServiceDropDown = ({handleSelected}) => {
    const[isOpen, setIsOpen]     = useState(false);
    const[selected, setSelected] = useState("");

    const dropDownRef = useRef();

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setIsOpen(false)
        };
    };

    const handleSelect = (id, name) => {
        setIsOpen(false);
        setSelected(name);
        handleSelected({target:{value:id}});
    };
    const handleToggleDropDown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div ref={dropDownRef} className="w-full relative xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
            <button type="button" onClick={handleToggleDropDown} className="w-full bg-blue-950 rounded-lg text-white font-sans font-bold p-1 shadow-2xl z-50 xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                {selected || "Select Appointment Personnel."}
                <span className="ml-[2rem]">{isOpen ? "▲" :"▼"}</span>
            </button>
            {
                isOpen && (
                    <>
                    <label htmlFor="name" className="sr-only">Appointment Personnel Name</label>
                    <ul id="name" className="absolute w-full bg-black opacity-80 z-50 h-20 overflow-y-auto p-2 mt-1 rounded-lg">
                        {
                            PROFESSIONAL_SERVICE_APPOINTMENT_PERSONNEL.map((personnel) => (
                                <li key={personnel.identifier} className="text-white font-sans hover:bg-gray-700 font-bold px-4 py-2 hover:text-yellow-600 hover:animate-pulse cursor-pointer xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]" onClick={() => handleSelect(personnel.identifier, personnel.name)}>
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
export default ProfessionalServiceDropDown;