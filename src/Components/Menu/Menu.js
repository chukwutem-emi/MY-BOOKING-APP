import React, { useEffect, useRef, useState } from "react";
import UserProfile from "./UserProfile";
import { MdMenu } from "react-icons/md";
import SelectLanguage from "./SelectLanguage";
import Logout from "./Logout";

const Menu = () => {
    const[isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef();
    
    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setIsOpen(false);
        };
    };

    const handleToggleOpenAndClose = () => setIsOpen(!isOpen)
    return (
        <div ref={dropDownRef} className="relative mt-[2rem]">
            <button type="button" onClick={handleToggleOpenAndClose} className="text-white font-bold z-50 hover:bg-white hover:text-black outline-none rounded-lg ml-[1rem]" title="MENU-BAR">
                <MdMenu size={40}/>
            </button>
            {
                isOpen && (
                    <div className="left-0 absolute bg-gradient-to-r from-indigo-600 to-cyan-400 h-dvh z-50 p-4 overflow-y-auto shadow-2xl space-y-6 w-[20rem] xs:w-[20rem] sm:w-[30rem] md:w-[30rem] lg:w-[30rem] xl:w-[30rem]"> 
                        <UserProfile />
                        <SelectLanguage />
                        <Logout />
                    </div>
                )
            }
        </div>
    );
};
export default Menu;