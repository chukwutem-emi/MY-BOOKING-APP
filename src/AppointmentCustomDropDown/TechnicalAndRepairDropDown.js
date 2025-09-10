import React, { useEffect, useRef, useState } from "react";
import { TECHNICAL_AND_REPAIR_SERVICE_APPOINTMENT_PERSONNEL } from "../Utils/constants";

const TechnicalAndRepairDropDown = ({handleSelected}) => {
    const[isOpen, setIsOpen]     = useState(false);
    const[selected, setSelected] = useState("");

    const dropDownRef = useRef();

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClickOutside = (e) => {
        if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
            setIsOpen(false);
        };
    };

    const handleSelect = (id, name) => {
        handleSelected({target:{value:id}});
        setIsOpen(false);
        setSelected(name);
    };

    const handleToggleDropDown = () => setIsOpen(!isOpen)
    
    return (
        <div ref={dropDownRef} className="relative w-full xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
            <button type="button" onClick={handleToggleDropDown} className="w-full bg-blue-950 rounded-lg text-white font-sans font-bold p-1 shadow-2xl z-50 xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                {selected || "Select Appointment Personnel."}
                <span className="ml-[2rem]">{isOpen ? "▲" : "▼"}</span>
                {
                    isOpen && (
                        <>
                        <label htmlFor="name" className="sr-only">Appointment Personnel Name</label>
                        <ul className="absolute w-full bg-black opacity-80 z-50 h-20 overflow-y-auto p-2 mt-1 rounded-lg" id="name">
                            {
                                TECHNICAL_AND_REPAIR_SERVICE_APPOINTMENT_PERSONNEL.map((personnel) => (
                                    <li key={personnel.identifier} onClick={() => handleSelect(personnel.identifier, personnel.name)} className="text-white font-sans hover:bg-gray-700 font-bold px-4 py-2 hover:text-yellow-600 hover:animate-pulse cursor-pointer xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                                        {personnel.name}
                                    </li>
                                ))
                            }
                        </ul>
                        </>
                    )
                }
            </button>
        </div>
    );
};
export default TechnicalAndRepairDropDown;