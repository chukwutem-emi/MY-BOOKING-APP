import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";


const DeletePersonnelCustomDropDown = ({handleSelected}) => {
    const[isOpen, setIsOpen]     = useState(false);
    const[selected, setSelected] = useState("");
    const dropDownRef = useRef();

    const personnelData = useSelector((store) => store.details?.personnelDetails); 

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleSelect = (name) => {
        setSelected(name);
        handleSelected({target:{value:name}});
        setIsOpen(false);
    };
    
    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setIsOpen(false);
        };
    };

    const handleToggleDropDown = () => setIsOpen(!isOpen);
    return (
        <div ref={dropDownRef} className="relative">
            {/* Closed state */}
            <button type="button" onClick={handleToggleDropDown} className="w-full p-2 hover:bg-blue-600 outline-none rounded-xl font-bold bg-blue-950 text-white xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                {selected || "Select user"}
                <span>{isOpen ? "▲" : "▼"}</span>
            </button>
            {/* Open state */}
            {
                isOpen && (
                    <>
                    <label htmlFor="name" className="sr-only">Personnel name</label>
                    <ul id="name" className="w-[18rem] xl:w-[30rem] absolute  bg-gradient-to-r from-indigo-600 to-cyan-400 shadow-lg rounded-md mt-1 z-20 h-20 overflow-y-auto">
                        {
                            personnelData.map((personnel) => (
                                <li key={personnel.id} onClick={() => handleSelect(personnel.name.toLowerCase())} className="text-white font-semibold hover:bg-cyan-400 hover:shadow-2xl hover:z-50 cursor-pointer px-4 py-2 xs:text-[0.4rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                                    {personnel.name.toLowerCase()}
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
export default DeletePersonnelCustomDropDown;