import React from "react";

const UpdateUserInputField = ({label, id, type, inputRef, placeholder, autoComplete, handleClearMessage}) => {
    return (
        <>
        <label htmlFor={id} className="text-red-300 font-bold font-sans shadow-lg xs:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]"><strong>{label}</strong></label>
        <input
        type={type}
        id={id}
        name={id}
        ref={inputRef}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={handleClearMessage}
        autoCorrect="on"
        className="w-full p-2 font-sans bg-gray-700 text-white rounded-lg outline-none border-[1px] border-white xs:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]"
        required 
        />
        </>
    );
};
export default UpdateUserInputField;