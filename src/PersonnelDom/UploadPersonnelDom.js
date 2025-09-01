import React from "react";
import PersonnelInputFields from "./PersonnelInputFields";
import LoadingSpinner from "../Utils/LoadingSpinner";
import Spinner from "../Utils/Spinner";

const UploadPersonnelDom = ({handleUploadPersonnelForm, specializationRef, organizationAddressRef, organizationRef, phoneNumberRef, emailRef, nameRef, roleRef, backgroundLoading, errorMsg, isLoading, message, setMessage, handleClearMsg}) => {
    return (
        <form onSubmit={handleUploadPersonnelForm} className="w-[50%] mx-auto shadow-2xl bg-white p-6 space-y-5 flex flex-col mb-[2rem] rounded-xl xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]">
            <h1 className="w-full mb-[1rem] text-blue-800 font-sans font-bold text-[1.6rem] flex text-start xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.6rem]">Upload Personnel-Details</h1>
            {
                backgroundLoading && (
                    <LoadingSpinner />
                )
            }
            {
                message && (
                    <div className={`p-4 break-words my-[1rem] font-sans font-bold text-lg w-full rounded-xl xs:text-sm sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.4rem] ${errorMsg ? "text-red-800 bg-red-50" : "text-green800 bg-green-50"}`}>
                        <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage("")} aria-label="cancel">&times;</button>
                        {message}
                    </div>
                )
            }
            <PersonnelInputFields
            autoComplete="on"
            id="name"
            inputRef={nameRef}
            label="Personnel Name:"
            placeholder="Please enter the personnel name."
            type="text"
            handleClearMsg={handleClearMsg}
            />
            <PersonnelInputFields
            autoComplete="email"
            id="email"
            inputRef={emailRef}
            label="Personnel Email:"
            placeholder="Please enter the personnel email address"
            type="email"
            handleClearMsg={handleClearMsg} 
            />
            <PersonnelInputFields
            autoComplete="on"
            id="specialization"
            inputRef={specializationRef}
            label="Personnel Specialization:"
            placeholder="Please enter the personnel specialization"
            type="text"
            handleClearMsg={handleClearMsg} 
            />
            <PersonnelInputFields
            autoComplete="on"
            id="role"
            inputRef={roleRef}
            label="Personnel Role:"
            placeholder="Please enter the personnel role."
            type="text"
            handleClearMsg={handleClearMsg}
            />
            <PersonnelInputFields
            autoComplete="tel"
            id="phone_number"
            inputRef={phoneNumberRef}
            label="Personnel Phone-Number:"
            placeholder="Please enter the personnel phone number."
            type="text"
            handleClearMsg={handleClearMsg}
            />
            <PersonnelInputFields
            autoComplete="on"
            id="organization"
            inputRef={organizationRef}
            label="Organization Name:"
            placeholder="Please enter the name of the organization."
            type="text" 
            handleClearMsg={handleClearMsg}
            />
            <PersonnelInputFields
            autoComplete="on"
            id="organization_address"
            inputRef={organizationAddressRef}
            label="Organization Address:"
            placeholder="Please enter the organization address"
            type="text" 
            handleClearMsg={handleClearMsg}
            />
            <button type="submit" className="w-full bg-blue-900 text-white font-sans font-bold text-[1.5rem] p-2 rounded-xl cursor-pointer hover:bg-blue-600" title="Submit">
                {
                    isLoading ? (
                        <div className="flex flex-row">
                            <Spinner />
                            <p className="ml-[6rem] mt-[0.5rem] font-sans font-bold text-[1.4rem] text-white xs:ml-[3rem] xs:text-sm sm:ml-[6rem] sm:text-[1.2rem] md:ml-[6rem] md:text-[1.3rem] lg:ml-[6rem] lg:text-[1.4rem] xl:ml-[6rem] xl:text-[1.4rem]">Processing, please wait.....</p>
                        </div>
                    ) : (
                        "Submit"
                    )
                }
            </button>
        </form>
    );
};
export default UploadPersonnelDom;