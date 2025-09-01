import React from "react";

const PromoteUserInputField = ({label, id, type, inputRef, placeholder, handleClearMsg, autoComplete}) => {
    return (
        <>
        <label htmlFor={id} className="text-red-300 text-xl"><strong>{label}</strong></label>
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
        className="w-full p-2 bg-gray-700 outline-none rounded-lg text-white"
        />
        </>
    );
};
export default PromoteUserInputField;