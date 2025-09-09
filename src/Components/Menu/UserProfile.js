import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import lang from "../../Utils/multiLanguageConfig";

const UserProfile = () => {
    const[isOpen, setIsOpen] = useState(false);

    const langKey = useSelector((store) => store.config?.lang);

    const dropDownRef = useRef();

    const userDetails = useSelector((store) => store.info?.userInfo);
    const userPassword = useSelector((store) => store.info?.userPassword);
    const username = userDetails?.username || "";
    const firstTwoLetters = username.substring(0, 2);

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
            <h1 className="text-blue-900 font-sans font-bold text-[1.3rem] w-fit bg-white p-1 rounded-2xl shadow-2xl xs:text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.4rem]">{lang[langKey]?.userProfileInfo?.userProfileHeading}</h1>
            <div className="flex flex-row">
                <p className="text-white bg-yellow-600 w-fit p-2 rounded-full font-sans font-bold xs:text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]"> {firstTwoLetters}</p>
                <button type="button" onClick={toggleBtn} className="font-bold font-sans ml-[1rem] text-white outline-none hover:bg-white hover:text-black rounded-lg">
                    <BsThreeDots  size={30}/>
                </button>
            </div>
            {
                isOpen && (
                    <>
                    <p className="text-white font-sans break-words xs:text-[1rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.2rem]">{lang[langKey]?.userProfileInfo?.userProfileParagraph}</p>
                    <ul className="text-green-600 font-sans shadow-2xl z-50 text-[1.2rem] absolute bg-blue-950 p-4 space-y-2 rounded-lg break-words xs:text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]">
                        <li><strong className="text-white">{lang[langKey]?.userProfileInfo?.userProfileName}</strong>&nbsp;{userDetails?.username}</li>
                        <li><strong className="text-white">{lang[langKey]?.userProfileInfo?.userProfileEmail}</strong>&nbsp;{userDetails?.email_address}</li>
                        <li><strong className="text-white">{lang[langKey]?.userProfileInfo?.userProfileTel}</strong>&nbsp;{userDetails?.phone_number}</li>
                        <li><strong className="text-white">{lang[langKey]?.userProfileInfo?.userProfilePassword}</strong>&nbsp;{userPassword}</li>
                        <li className="bg-white w-fit p-1 rounded-xl text-blue-800 font-extrabold animate-pulse"><strong>{userDetails?.admin ? (<>{lang[langKey]?.userProfileInfo?.userProfileAdmin}</>) : (<>{lang[langKey]?.userProfileInfo?.userProfileNonAdmin}</>)}</strong></li>
                    </ul>
                    </>
                )
            }
        </div>
    );
};
export default UserProfile;