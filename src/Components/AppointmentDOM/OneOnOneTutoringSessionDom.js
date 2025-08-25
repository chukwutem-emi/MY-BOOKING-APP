import React from "react";
import Spinner from "../../Utils/Spinner";
import EducationCustomDropDown from "../../AppointmentCustomDropDown/EducationCustomDropDown";

const OneOnOneTutoringSessionDom = ({handleOneOnOneTutorialForm, addressRef, appointmentDateRef, appointmentDescriptionRef, appointmentTimeRef, genderRef, isError, message, nextOfKinAddressRef, nextOfKinPhoneNumberRef, nextOfKinRef, isLoading, handleSelected, setMessage}) => {
    return (
        <form onSubmit={handleOneOnOneTutorialForm} className="w-[50%] space-y-4 my-0 mx-auto shadow-2xl bg-white flex flex-col p-4 rounded-2xl xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]">
            <h1 className="text-center font-sans text-blue-800 font-bold text-[1.5rem] mb-8 animate-pulse xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">One-On-One Tutoring Session Appointment</h1>
            {
                message && (
                    <div className={`break-words p-2 w-full ${isError ? "text-red-600 bg-red-100 font-semibold text-lg" : "text-green-600 bg-green-100 font-semibold text-lg"}`}>
                        <button type="button" className="text-[2rem] bg-white text-red-600 shadow-2xl w-8 h-8 text-center rounded-full border-[1px] border-red-300" onClick={() => setMessage("")}>&times;</button>
                        <div dangerouslySetInnerHTML={{__html:message}} />
                    </div>
                )
            }
            <label htmlFor="gender" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Gender:</strong></label>
            <input
            type="text"
            className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
            placeholder="Please enter your gender"
            ref={genderRef}
            id="gender"
            name="gender"
            autoComplete="on"
            required
            />
            <label htmlFor="address" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Address:</strong></label>
            <input
            type="text"
            className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
            placeholder="Please enter your address"
            ref={addressRef}
            id="address"
            name="address"
            autoComplete="on"
            required
            />
            <EducationCustomDropDown handleSelected={handleSelected}/>
            <label htmlFor="next_of_kin" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Next Of kin:</strong></label>
            <input
            type="text"
            className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
            placeholder="Please enter your next of kin"
            ref={nextOfKinRef}
            id="next_of_kin"
            name="next_of_kin"
            autoComplete="on"
            required
            />
            <label htmlFor="next_of_kin_phone_number" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Next Of Kin Phone Number:</strong></label>
            <input
            type="text"
            className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
            placeholder="Please enter your next of kin phone number"
            ref={nextOfKinPhoneNumberRef}
            id="next_of_kin_phone_number"
            name="next_of_kin_phone_number"
            autoComplete="on"
            required
            />
            <label htmlFor="next_of_kin_address" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Next Of Kin Address:</strong></label>
            <input
            type="text"
            className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
            placeholder="Please enter your next of kin address"
            ref={nextOfKinAddressRef}
            id="next_of_kin_address"
            name="next_of_kin_address"
            autoComplete="on"
            required
            />
            <label htmlFor="appointment_time" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Appointment Time:</strong></label>
            <input
            type="time"
            className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
            placeholder="Please choose your convenient time for the appointment"
            ref={appointmentTimeRef}
            id="appointment_time"
            name="appointment_time"
            autoComplete="on"
            required
            />
            <label htmlFor="appointment_date" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Appointment Date:</strong></label>
            <input
            type="date"
            className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
            placeholder="Please choose your convenient date for the appointment"
            ref={appointmentDateRef}
            id="appointment_date"
            name="appointment_date"
            autoComplete="on"
            required
            />
            <label htmlFor="appointment_description" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Appointment Description:</strong></label>
            <textarea
            className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl"
            ref={appointmentDescriptionRef}
            placeholder="Please write a little description of what you want to do."
            id="appointment_description"
            name="appointment_description"
            autoComplete="on"
            required
            autoFocus
            />
            <button type="submit" className="bg-blue-800 flex flex-row p-2 justify-center rounded-lg break-words hover:bg-blue-600">
                {
                    isLoading ? (
                        <div className="flex flex-row">
                            <Spinner />
                            <div className="ml-8 text-white text-[1.2rem]">
                            Please wait! while we process your data..........
                            </div>
                        </div>
                    ) : (
                        <div className="text-white text-[1.2rem] font-sans font-bold sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                            Submit
                        </div>
                    )
                }
            </button>
        </form>
    );
};
export default OneOnOneTutoringSessionDom;