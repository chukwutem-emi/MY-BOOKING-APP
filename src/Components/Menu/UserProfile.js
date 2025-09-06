import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";

const UserProfile = () => {
    const[isOpen, setIsOpen] = useState(false);

    const dropDownRef = useRef();

    const userDetails = useSelector((store) => store.info?.userInfo);
    const userPassword = useSelector((store) => store.info?.userPassword);
    const user = {username:userDetails?.username}
    const firstTwoLetters = user.username.substring(0, 2);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    
    const toggleBtn = () => setIsOpen(!isOpen);
    return (
        <div ref={dropDownRef} className="space-y-4 relative">
            <h1 className="text-blue-900 font-sans font-bold text-[1.3rem] w-fit bg-white p-1 rounded-2xl shadow-2xl xs:text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.4rem]">User Profile:</h1>
            <div className="flex flex-row">
                <p className="text-white bg-yellow-600 w-fit p-2 rounded-full font-sans font-bold xs:text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]"> {firstTwoLetters}</p>
                <button type="button" onClick={toggleBtn} className="font-bold font-sans ml-[1rem] text-white outline-none hover:bg-white hover:text-black rounded-lg">
                    <BsThreeDots  size={30}/>
                </button>
            </div>
            {
                isOpen && (
                    <>
                    <p className="text-white font-sans break-words xs:text-[1rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.2rem]">In order to see your details here, you have to fetch your details by clicking "User Profile" in the side-bar(the 3 vertical dot) at the top right-side of the main page.</p>
                    <ul className="text-green-600 font-sans shadow-2xl z-50 text-[1.2rem] absolute bg-blue-950 p-4 space-y-2 rounded-lg break-words xs:text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]">
                        <li><strong className="text-white">NAME:</strong>&nbsp;{userDetails?.username}</li>
                        <li><strong className="text-white">EMAIL:</strong>&nbsp;{userDetails?.email_address}</li>
                        <li><strong className="text-white">TEL:</strong>&nbsp;{userDetails?.phone_number}</li>
                        <li><strong className="text-white">PASSWORD:</strong>&nbsp;{userPassword}</li>
                        <li className="bg-white w-fit p-1 rounded-xl text-blue-800 font-extrabold animate-pulse"><strong>{userDetails?.admin ? "Admin" : "Non-Admin"}</strong></li>
                    </ul>
                    </>
                )
            }
        </div>
    );
};
export default UserProfile;