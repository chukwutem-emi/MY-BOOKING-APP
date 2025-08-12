import React, { useRef, useState } from "react";
import useUpdateUser from "../UserCustomHooks/useUpdateUser";
import Spinner from "../Utils/Spinner";

const UpdateUser = () => {
    const[showPassword, setShowPassword] = useState(false);
    const userNameRef      = useRef(null);
    const passwordRef      = useRef(null);
    const emailAddressRef  = useRef(null);
    const phoneNumberRef   = useRef(null);


    const {
        message,
        loading,
        errorMessage,
        handleUserUpdate : handleUserInfo
    } = useUpdateUser({payload: {}});

    const handleBtnClick = (e) => {
        e.preventDefault();
        const payload = {
            username      : userNameRef.current.value,
            password      : passwordRef.current.value,
            email_address : emailAddressRef.current.value,
            phone_number  : phoneNumberRef.current.value,
        };
        handleUserInfo(e, payload);
    }
    return (
        <div className="w-full mt-[15rem] overflow-x-hidden items-center">
            <form onSubmit={handleBtnClick} className="bg-black px-6 py-6 rounded-2xl shadow-2xl flex flex-col space-y-5 w-[50%] xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%] mt-0 mx-auto opacity-70">
                <h1 className="w-full text-start text-white text-3xl font-bold animate-pulse">Update Form</h1>
                {
                    message && (
                        <div className={`text-lg break-words w-full p-4 rounded-lg font-bold font-sans ${errorMessage ? "text-red-700 bg-red-100" : "text-green-800 bg-green-100"}`}>
                            <div>{message}</div>
                        </div>
                    )
                }
                <label htmlFor="username" className="text-red-300 font-bold font-sans text-2xl shadow-lg"><strong>New Username:</strong></label>
                <input
                type="text"
                ref={userNameRef}
                placeholder="Enter the username that you preferred."
                name="username"
                id="username"
                autoComplete="on"
                autoCorrect="on"
                className="w-full p-2 text-lg bg-gray-700 text-white rounded-lg outline-none"
                required
                 />
                <label htmlFor="password" className="text-red-300 font-bold font-sans text-2xl shadow-lg"><strong>New Password:</strong></label>
                <input
                type={showPassword ? "text" : "password"}
                ref={passwordRef}
                placeholder="Enter the password that you preferred."
                name="password"
                id="password"
                autoComplete="new-password"
                autoCorrect="on"
                className="w-full p-2 text-lg bg-gray-700 text-white rounded-lg outline-none"
                required
                 />
                <div className="flex flex-row space-x-6">
                    <label htmlFor="checkbox" className="bg-gray-700 shadow-2xl w-fit px-2 border-yellow-600 border-[0.3rem] rounded-full cursor-pointer">
                        <input
                        id="checkbox"
                        name="checkbox"
                        type={"checkbox"}
                        onClick={() => setShowPassword(!showPassword)}
                        className="p-2 cursor-pointer"
                        title="Click to see password"
                        />
                        👁️
                    </label>
                    <p className="text-white text-[1.2rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.3rem] font-extrabold font-sans">👈Show-password</p>
                </div>
                <label htmlFor="email_address" className="text-red-300 font-bold font-sans text-2xl shadow-lg"><strong>New Email-Address:</strong></label>
                <input
                type="email"
                ref={emailAddressRef}
                placeholder="Enter the email that you preferred."
                name="email_address"
                id="email_address"
                autoComplete="email"
                autoCorrect="on"
                className="w-full p-2 text-lg bg-gray-700 text-white rounded-lg outline-none"
                required
                 />
                <label htmlFor="phone_number" className="text-red-300 font-bold font-sans text-2xl shadow-lg"><strong>New Phone-Number:</strong></label>
                <input
                type="text"
                ref={phoneNumberRef}
                placeholder="Enter the phone number that you preferred."
                name="phone_number"
                id="phone_number"
                autoComplete="tel"
                autoCorrect="on"
                className="w-full p-2 text-lg bg-gray-700 text-white rounded-lg outline-none"
                 />
                 <button type="submit" className="text-center w-full bg-red-400 p-2 text-xl hover:bg-red-300 text-white font-sans rounded-lg font-extrabold">
                    {
                        loading ? (
                            <div className="flex flex-row justify-center">
                                <>
                                <Spinner />
                                <div className="ml-[3rem] outline-none xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">Updating, Please wait......</div>
                                </>
                            </div>
                        ) : ("Submit")
                    }
                 </button>
            </form>
        </div>
    )
};
export default UpdateUser;