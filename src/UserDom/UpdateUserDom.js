import React from "react";
import Spinner from "../Utils/Spinner";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import UpdateUserInputField from "./UpdateUserInputField";

const UpdateUserDom = ({message, errorMessage, userNameRef, showPassword, passwordRef, emailAddressRef, phoneNumberRef, handleBtnClick, loading, setShowPassword, handleClearMessage}) => {
    return (
        <form onSubmit={handleBtnClick} className="bg-black px-6 mb-[2rem] py-6 rounded-2xl shadow-2xl flex flex-col space-y-5 w-full xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[50%] mt-0 mx-auto">
            <h1 className="w-full text-start text-white text-3xl font-bold animate-pulse xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]">Update Form</h1>
            {
                message && (
                    <div className={`text-lg break-words w-full p-4 rounded-lg font-bold font-sans ${errorMessage ? "text-red-700 bg-red-100" : "text-green-800 bg-green-100"}`}>
                        <div>{message}</div>
                    </div>
                )
            }
            <UpdateUserInputField
            autoComplete="on"
            handleClearMessage={handleClearMessage}
            id="username"
            inputRef={userNameRef}
            label="New Username:"
            placeholder="Enter the username that you preferred."
            type="text" 
            />
            <UpdateUserInputField
            autoComplete="new-password"
            handleClearMessage={handleClearMessage}
            id="password"
            inputRef={passwordRef}
            label="New Password:"
            placeholder="Enter the password that you preferred."
            type={showPassword ? "text" : "password"}
            />
            <div className="flex flex-row space-x-1">
                <div onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <MdToggleOn color="green" size={60}/> : <MdToggleOff color="red" size={60}/>
                    }
                </div>
                <p className="text-white  xs:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem] font-extrabold font-sans mt-[1.2rem]">Show-password</p>
            </div>
            <UpdateUserInputField
            autoComplete="email"
            handleClearMessage={handleClearMessage}
            id="email_address"
            inputRef={emailAddressRef}
            label="New Email-Address:"
            placeholder="Enter the email that you preferred."
            type="email"
            />
            <UpdateUserInputField
            autoComplete="tel"
            handleClearMessage={handleClearMessage}
            id="phone_number"
            inputRef={phoneNumberRef}
            label="New Phone-Number:"
            placeholder="Enter the phone number that you preferred."
            type="text" 
            />
                <button type="submit" className="w-full bg-red-400 p-2 text-xl hover:bg-red-300 text-white font-sans rounded-lg font-extrabold outline-none">
                {
                    loading ? (
                        <div className="flex flex-row">
                            <>
                            <Spinner />
                            <div className="animate-pulse break-words xs:ml-[6rem] sm:ml-[6rem] md:ml-[6rem] lg:ml-[10rem] xl:ml-[12rem]">Updating...</div>
                            </>
                        </div>
                    ) : (
                        <div className="text-center font-bold xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.5rem]">
                            Submit
                        </div>
                    )
                }
                </button>
        </form>
    );
};
export default UpdateUserDom;