import React from "react";

const UpdateAppointmentInputField = ({label, id, type, inputRef, handleClearMsg, autoComplete, placeholder}) => {
    return (
        <>
        <label htmlFor={id} className="text-xl text-blue-700 font-extrabold xs:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]"><strong>{label}</strong></label>
        <input
        id={id}
        name={id}
        type={type}
        ref={inputRef}
        onChange={handleClearMsg}
        className="w-full p-2 outline-none border border-blue-800 font-sans font-semibold rounded-lg text-[1.4rem] xs:text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]"
        autoComplete={autoComplete}
        placeholder={placeholder}
        autoCorrect="on"
        required 
        />
        </>
    );
};
export default UpdateAppointmentInputField;