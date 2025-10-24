import React from "react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const UsersCustomDropDown = ({handleSelected}) => {
    const[isOpen, setIsOpen]     = useState(false);
    const[selected, setSelected] = useState("");

    const usersData = useSelector((store) => store.details?.usersDetails); 

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleSelect = (id, name) => {
        setSelected(name);
        handleSelected({target:{value:id}});
        setIsOpen(false);
    };
    
    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setIsOpen(false);
        };
    };

    const handleToggleDropDown = () => setIsOpen(!isOpen);
    const dropDownRef = useRef();
    return (
        <div ref={dropDownRef} className="relative w-[50%]">
            {/* Closed state */}
            <button type="button" onClick={handleToggleDropDown} className="w-full p-1 hover:bg-blue-600 outline-none rounded-xl font-bold bg-blue-950 text-white xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                {selected || "Select user"}
                <span>{isOpen ? "▲" : "▼"}</span>
            </button>
            {/* Open state */}
            {
                isOpen && (
                    <>
                    <label htmlFor="name" className="sr-only">User name</label>
                    <ul id="name" className="w-full absolute  bg-black opacity-80 shadow-lg rounded-md mt-1 z-20 h-20 overflow-y-auto">
                        {
                            usersData.map((user) => (
                                <li key={user.id} onClick={() => handleSelect(user.id, user.username)} className="text-white hover:bg-gray-700 cursor-pointer px-4 py-2 hover:text-yellow-600 xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                                    {user.username}
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
export default UsersCustomDropDown;