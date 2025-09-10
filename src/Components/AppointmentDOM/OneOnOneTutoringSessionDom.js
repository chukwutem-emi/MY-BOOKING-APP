import React from "react";
import Spinner from "../../Utils/Spinner";
import EducationCustomDropDown from "../../AppointmentCustomDropDown/EducationCustomDropDown";
import InputFields from "./InputFields";
import { useSelector } from "react-redux";
import lang from "../../Utils/multiLanguageConfig";

const OneOnOneTutoringSessionDom = ({handleOneOnOneTutorialForm, addressRef, appointmentDateRef, appointmentDescriptionRef, appointmentTimeRef, genderRef, isError, message, nextOfKinAddressRef, nextOfKinPhoneNumberRef, nextOfKinRef, isLoading, handleSelected, setMessage}) => {

    const langKey = useSelector((store) => store.config?.lang);

    return (
        <form onSubmit={handleOneOnOneTutorialForm} className="w-full space-y-4 mb-[2rem] mx-auto shadow-2xl bg-white flex flex-col p-4 rounded-2xl xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]">
            <h1 className="font-sans text-blue-800 font-bold mb-8 animate-pulse xs:text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]">{lang[langKey]?.appointmentsInputFields?.oneOnOneTutoringSessionHeading}</h1>
            {
                message && (
                    <div className={`break-words p-2 w-full ${isError ? "text-red-600 bg-red-100 font-semibold text-lg" : "text-green-600 bg-green-100 font-semibold text-lg"}`}>
                        <button type="button" className="text-[2rem] bg-white text-red-600 shadow-2xl w-8 h-8 text-center rounded-full border-[1px] border-red-300" onClick={() => setMessage("")}>&times;</button>
                        <div dangerouslySetInnerHTML={{__html:message}} />
                    </div>
                )
            }
            <InputFields
            autoComplete="on"
            id="gender"
            inputRef={genderRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsGenderLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsGenderPlaceHolder}
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="address"
            inputRef={addressRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsAddressLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsAddressPlaceHolder}
            type="text" 
            />
            <EducationCustomDropDown handleSelected={handleSelected}/>
            <InputFields
            autoComplete="on"
            id="next_of_kin"
            inputRef={nextOfKinRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinPlaceHolder}
            type="text" 
            />
            <InputFields
            autoComplete="tel"
            id="next_of_kin_phone_number"
            inputRef={nextOfKinPhoneNumberRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinPhoneNumberLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinPhoneNumberPlaceHolder}
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin_address"
            inputRef={nextOfKinAddressRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinAddressLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinAddressPlaceHolder}
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="appointment_time"
            inputRef={appointmentTimeRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsTimeLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsTimePlaceHolder}
            type="time" 
            />
            <InputFields
            autoComplete="on"
            id="appointment_date"
            inputRef={appointmentDateRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsDateLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsDatePlaceHolder}
            type="date" 
            />
            <label htmlFor="appointment_description" className="font-bold text-blue-600 xs:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem]"><strong>{lang[langKey]?.appointmentsInputFields?.appointmentsDescriptionLabel}</strong></label>
            <textarea
            className="border-[1px] border-blue-600 outline-none px-2 py-1 rounded-lg xs:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem]"
            ref={appointmentDescriptionRef}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsDescriptionPlaceHolder}
            id="appointment_description"
            name="appointment_description"
            autoComplete="on"
            required
            autoFocus
            />
            <button type="submit" className="bg-blue-800 flex flex-row p-2 rounded-lg break-words hover:bg-blue-600 outline-none text-white font-sans">
                {
                    isLoading ? (
                        <div className="flex flex-row">
                            <Spinner />
                            <div className="animate-pulse break-words xs:ml-[6rem] sm:ml-[6rem] md:ml-[6rem] lg:ml-[10rem] xl:ml-[12rem">
                            {lang[langKey]?.appointmentsInputFields?.appointmentButtonParagraph}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center font-bold xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.5rem]">
                            {lang[langKey]?.appointmentsInputFields?.appointmentButtonInnerText}
                        </div>
                    )
                }
            </button>
        </form>
    );
};
export default OneOnOneTutoringSessionDom;