import React, { useEffect, useRef, useState } from "react";
import { HEALTHCARE_APPOINTMENT_PERSONNEL } from "../Utils/constants";


const HealthcareCustomDropDown = ({handleSelected}) => {
    const[selected, setSelected] = useState("");
    const[isOpen, setIsOpen]     = useState(false);

    const clickOutsideDomRef = useRef();

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClickOutside = (e) => {
        if (clickOutsideDomRef.current && !clickOutsideDomRef.current.contains(e.target)) {
            setIsOpen(false);
        };
    };

    const handleSelect = (name, id) => {
        setSelected(name);
        setIsOpen(false);
        handleSelected({target:{value:id}});
    };
    const handleHealthcareToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full relative xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]" ref={clickOutsideDomRef}>
            {/* toggle close */}
            <button onClick={handleHealthcareToggle} className="bg-blue-950 text-white font-sans w-full p-1 rounded-lg font-bold xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                {selected || "Select Appointment Personnel"}
                <span className="ml-[2rem]">{isOpen ? "▲ ": "▼"}</span>
            </button>
            {/* Toggle open */}
            {
                isOpen && (
                    <>
                    <label htmlFor="name" className="sr-only">Appointment Personnel Name</label>
                    <ul id="name" className="w-full mt-1 text-[1.2rem] font-sans font-bold bg-black rounded-lg p-2 opacity-80 h-20 overflow-y-auto absolute left-0 shadow-lg z-20 xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]">
                        {
                            HEALTHCARE_APPOINTMENT_PERSONNEL.map((personnel) => (
                                <li key={personnel.identifier} onClick={() => handleSelect(personnel.name, personnel.identifier)} className="cursor-pointer text-white hover:bg-gray-700 px-4 py-1 rounded-lg hover:animate-pulse hover:text-yellow-600 xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                                    {personnel.name}
                                </li>
                            ))
                        }
                    </ul>
                    </>
                )
            }
        </div>
    );
};
export default HealthcareCustomDropDown;