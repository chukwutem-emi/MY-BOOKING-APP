import React from "react";
import Spinner from "../Utils/Spinner";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import UpdateUserInputField from "./UpdateUserInputField";

const UpdateUserDom = ({message, errorMessage, userNameRef, showPassword, passwordRef, emailAddressRef, phoneNumberRef, handleBtnClick, loading, setShowPassword, handleClearMessage}) => {
    return (
        <form onSubmit={handleBtnClick} className="bg-black px-6 mb-[2rem] py-6 rounded-2xl shadow-2xl flex flex-col space-y-5 w-[50%] xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%] mt-0 mx-auto">
            <h1 className="w-full text-start text-white text-3xl font-bold animate-pulse">Update Form</h1>
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
                <p className="text-white text-[1.2rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.3rem] font-extrabold font-sans mt-3">Show-password</p>
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
    );
};
export default UpdateUserDom;