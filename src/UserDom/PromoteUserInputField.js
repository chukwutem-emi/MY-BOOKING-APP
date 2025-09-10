import React from "react";

const PromoteUserInputField = ({label, id, type, inputRef, placeholder, handleClearMsg, autoComplete}) => {
    return (
        <>
        <label htmlFor={id} className="text-red-300 xs:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]"><strong>{label}</strong></label>
        <input
        type={type}
        id={id}
        name={id}
        ref={inputRef}
        placeholder={placeholder}
        onChange={handleClearMsg}
        required
        autoFocus
        autoComplete={autoComplete}
        className="w-full p-2 bg-gray-700 outline-none rounded-lg text-white xs:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]"
        />
        </>
    );
};
export default PromoteUserInputField;