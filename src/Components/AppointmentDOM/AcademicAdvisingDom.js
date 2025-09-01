import React from "react";
import Spinner from "../../Utils/Spinner";
import EducationCustomDropDown from "../../AppointmentCustomDropDown/EducationCustomDropDown";
import InputFields from "./InputFields";



const AcademicAdvisingDom = ({handleAcademicForm, message, errorMsg, isLoading, gender, address, nextOfKin, nextOfKinAddress, phone, appointmentDate, appointmentTime, description, handleSelected, setMessage}) => {

    return (
        <form onSubmit={handleAcademicForm} className="flex flex-col w-[50%] mb-[2rem] mx-auto p-4 space-y-4 shadow-2xl rounded-xl bg-white xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]">
            <h1 className="text-center justify-center text-blue-800 text-[1.4rem] font-extrabold mb-[2rem] animate-pulse">Academic-Advising Appointment</h1>
            {
                message && (
                    <div className={`m-2 p-2 font-sans break-words text-sm shadow-xl ${errorMsg ? "text-red-600 bg-red-200" : "text-green-800 bg-white"}`}>
                        <button type="button" className="h-fit w-fit text-xl p-1 bg-blue-400 font-extrabold text-red-600" onClick={() => setMessage(null)} aria-label="cancel" title="cancel
                        ">&times;</button>
                        <div dangerouslySetInnerHTML={{__html:message}} />
                    </div>
                )
            }
            <InputFields
            autoComplete="on"
            id="gender"
            inputRef={gender}
            label="Gender:"
            placeholder="Please enter your gender"
            type="text"
            />
            <EducationCustomDropDown handleSelected={handleSelected} />
            <InputFields
            autoComplete="on"
            id="address"
            inputRef={address}
            label="Address:"
            placeholder="Please enter Your address"
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin"
            inputRef={nextOfKin}
            label="Next Of Kin:"
            placeholder="Please enter the name of your next of kin"
            type="text"
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin_address"
            inputRef={nextOfKinAddress}
            label="Next Of kin Address:" 
            placeholder="Please enter your next of kin address"
            type="text"
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin_phone_number"
            inputRef={phone}
            label="Next Of Kin Phone Number:"
            placeholder="Please enter your next of kin phone number"
            type="text"
            />
            <InputFields
            autoComplete="on"
            id="appointment_time"
            inputRef={appointmentTime}
            label="Time:"
            placeholder="Please choose time"
            type="time" 
            />
            <InputFields
            autoComplete="on"
            id="appointment_date"
            inputRef={appointmentDate}
            label="Date:"
            placeholder="Please choose date"
            type="date"
            />
            <label htmlFor="appointment_description" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Appointment description:</strong></label>
            <textarea
                id="appointment_description"
                placeholder="Please write your appointment description"
                ref={description}
                name="appointment_description"
                autoComplete="on"
                autoFocus
                required
                className="p-2 rounded-lg font-sans text-[1rem] text-start break-words md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
            />
            <button type="submit" className="p-2 rounded-lg font-sans text-[1.2rem] md:text-[1.7rem] sm:text-[1.5rem] text-center cursor-pointer bg-blue-900 text-white hover:animate-pulse hover:bg-blue-600">
                {
                    isLoading ? (
                        <div className="flex flex-row">
                            <Spinner />
                            <p className="text-lg font-semibold text-white font-sans animate-pulse ml-[3rem]">Processing......</p>
                        </div>
                    ) : (
                        "Submit"
                    )
                }
            </button>
        </form>
    );
};
export default AcademicAdvisingDom;