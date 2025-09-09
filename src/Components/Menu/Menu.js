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
        <div ref={dropDownRef} className="relative mt-[2rem] w-full">
            <button type="button" onClick={handleToggleOpenAndClose} className="text-white font-bold z-50 hover:bg-white hover:text-black outline-none rounded-lg" title="MENU-BAR">
                <MdMenu size={40}/>
            </button>
            {
                isOpen && (
                    <div className="left-0 absolute bg-gray-600 h-dvh z-50 p-4 overflow-y-auto shadow-2xl space-y-6 w-full xs:w-[50%] sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%]"> 
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