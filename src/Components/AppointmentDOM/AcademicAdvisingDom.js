import React from "react";
import Spinner from "../../Utils/Spinner";
import EducationCustomDropDown from "../../AppointmentCustomDropDown/EducationCustomDropDown";
import InputFields from "./InputFields";
import { useSelector } from "react-redux";
import lang from "../../Utils/multiLanguageConfig";



const AcademicAdvisingDom = ({handleAcademicForm, message, errorMsg, isLoading, gender, address, nextOfKin, nextOfKinAddress, phone, appointmentDate, appointmentTime, description, handleSelected, setMessage}) => {

    const langKey = useSelector((store) => store.config?.lang);

    return (
        <form onSubmit={handleAcademicForm} className="flex flex-col w-full mb-[2rem] mx-auto p-4 space-y-4 shadow-2xl rounded-xl bg-white xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]">
            <h1 className="text-blue-800 font-extrabold mb-[2rem] animate-pulse xs:text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]">{lang[langKey]?.appointmentsInputFields?.academicAdvisingHeading}</h1>
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
            label={lang[langKey]?.appointmentsInputFields?.appointmentsGenderLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsGenderPlaceHolder}
            type="text"
            />
            <EducationCustomDropDown handleSelected={handleSelected} />
            <InputFields
            autoComplete="on"
            id="address"
            inputRef={address}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsAddressLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsAddressPlaceHolder}
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin"
            inputRef={nextOfKin}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinPlaceHolder}
            type="text"
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin_address"
            inputRef={nextOfKinAddress}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinAddressLabel} 
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinAddressPlaceHolder}
            type="text"
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin_phone_number"
            inputRef={phone}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinPhoneNumberLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinPhoneNumberPlaceHolder}
            type="text"
            />
            <InputFields
            autoComplete="on"
            id="appointment_time"
            inputRef={appointmentTime}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsTimeLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsTimePlaceHolder}
            type="time" 
            />
            <InputFields
            autoComplete="on"
            id="appointment_date"
            inputRef={appointmentDate}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsDateLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsDatePlaceHolder}
            type="date"
            />
            <label htmlFor="appointment_description" className="text-blue-700 font-extrabold xs:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem]"><strong>{lang[langKey]?.appointmentsInputFields?.appointmentsDescriptionLabel}</strong></label>
            <textarea
                id="appointment_description"
                placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsDescriptionPlaceHolder}
                ref={description}
                name="appointment_description"
                autoComplete="on"
                autoFocus
                required
                className="p-2 rounded-lg font-sans text-start break-words xs:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem] outline-none border-[1px] border-blue-300"
            />
            <button type="submit" className="p-2 rounded-lg font-sans cursor-pointer bg-blue-900 text-white hover:animate-pulse hover:bg-blue-600 outline-none">
                {
                    isLoading ? (
                        <div className="flex flex-row">
                            <Spinner />
                            <p className="animate-pulse break-words xs:ml-[6rem] sm:ml-[6rem] md:ml-[6rem] lg:ml-[10rem] xl:ml-[12rem">{lang[langKey]?.appointmentsInputFields?.appointmentButtonParagraph}</p>
                        </div>
                    ) : (
                        <div className="text-center font-bold xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.5rem]">
                            {
                                lang[langKey]?.appointmentsInputFields?.appointmentButtonInnerText
                            }
                        </div>
                    )
                }
            </button>
        </form>
    );
};
export default AcademicAdvisingDom;