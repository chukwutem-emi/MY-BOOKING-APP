import React from "react";
import UpdateAppointmentInputField from "./UpdateAppointmentInputField";

const UpdateAppointmentDom = ({isError, loading, message, setMessage, appointmentDescriptionRefRef, nextOfKinPhoneNumberRef, nextOfKinAddressRef, appointmentDateRef, appointmentTimeRef, nextOfKinRef, genderRef, addressRef, handleUpdateUserAppointmentForm, handleClearMsg}) => {
    return (
        <form onSubmit={handleUpdateUserAppointmentForm} className="w-[80%] mx-auto bg-white shadow-2xl z-50 rounded-xl mb-[2rem] p-6 space-y-4 flex flex-col xl:w-[50%]">
            <h1 className="text-blue-800 text-[1.4rem] font-extrabold mb-[2rem] animate-pulse xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.4rem]">Update Appointment Details</h1>
            {
                message && (
                    <div className={`m-2 p-2 font-sans break-words text-sm shadow-xl ${isError ? "text-red-800 bg-red-50" : "text-green-800 bg-green-50"}`}>
                        <button type="button" className="h-fit w-fit text-xl p-1 bg-blue-400 font-extrabold text-red-600" onClick={() => setMessage(null)} aria-label="cancel" title="cancel
                        ">&times;</button>
                        {message}
                    </div>
                )
            }
            <UpdateAppointmentInputField
            autoComplete="on"
            handleClearMsg={handleClearMsg}
            id="gender"
            inputRef={genderRef}
            label="Gender:"
            type="text"
            placeholder="Please enter your gender"
            />
            <UpdateAppointmentInputField
            autoComplete="on"
            handleClearMsg={handleClearMsg}
            id="address"
            inputRef={addressRef}
            label="New Address:"
            placeholder="Please enter your new address"
            type="text"
            />
            <UpdateAppointmentInputField
            autoComplete="on"
            handleClearMsg={handleClearMsg}
            id="next_of_kin"
            inputRef={nextOfKinRef}
            label="New Next Of Kin:"
            placeholder="Please enter your new next of kin"
            type="text" 
            />
            <UpdateAppointmentInputField
            autoComplete="tel"
            handleClearMsg={handleClearMsg}
            id="next_of_kin_phone_number"
            inputRef={nextOfKinPhoneNumberRef}
            label="New Next Of Kin Phone Number:"
            placeholder="Please enter your new next of kin phone number"
            type="text" 
            />
            <UpdateAppointmentInputField
            autoComplete="on"
            handleClearMsg={handleClearMsg}
            id="next_of_kin_address"
            inputRef={nextOfKinAddressRef}
            label="New Next Of Kin Address:"
            placeholder="Please enter your new next of kin address"
            type="text" 
            />
            <UpdateAppointmentInputField
            autoComplete="on"
            handleClearMsg={handleClearMsg}
            id="appointment_time"
            inputRef={appointmentTimeRef}
            label="New Appointment Time:"
            placeholder="Please enter your new appointment time" 
            type="time"
            />
            <UpdateAppointmentInputField
            autoComplete="on"
            handleClearMsg={handleClearMsg}
            id="appointment_date"
            inputRef={appointmentDateRef}
            label="New Appointment Date:"
            placeholder="Please enter your new appointment date"
            type="date" 
            />
            <label htmlFor="appointment_description" className="text-xl text-blue-700 font-extrabold xs:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]"><strong>New Appointment Description:</strong></label>
            <textarea
            id="appointment_description"
            placeholder="Please write your new appointment description"
            ref={appointmentDescriptionRefRef}
            name="appointment_description"
            autoComplete="on"
            autoFocus
            required
            className="p-2 rounded-lg font-sans text-[1rem] text-start break-words xs:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem] outline-none border-[1px] border-blue-300"
            />
            <button type="submit" className={`p-2 rounded-lg font-sans text-[1.2rem] md:text-[1.7rem] sm:text-[1.5rem] text-center cursor-pointer bg-blue-900 text-white hover:animate-pulse hover:bg-blue-600 ${loading ? "cursor-not-allowed bg-blue-600" : "cursor-pointer"}`}
            disabled={loading === true}
            >
                {
                    loading ? (
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
export default UpdateAppointmentDom;