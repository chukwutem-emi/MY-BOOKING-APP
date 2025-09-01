import React from "react";

const UpdateUserInputField = ({label, id, type, inputRef, placeholder, autoComplete, handleClearMessage}) => {
    return (
        <>
        <label htmlFor={id} className="text-red-300 font-bold font-sans text-2xl shadow-lg"><strong>{label}</strong></label>
        <input
        type={type}
        id={id}
        name={id}
        ref={inputRef}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={handleClearMessage}
        autoCorrect="on"
        className="w-full p-2 text-lg bg-gray-700 text-white rounded-lg outline-none border-[1px] border-white"
        required 
        />
        </>
    );
};
export default UpdateUserInputField;