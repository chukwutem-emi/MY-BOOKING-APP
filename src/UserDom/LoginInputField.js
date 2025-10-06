import React from "react";

const LoginInputField  = ({label, id, type, inputRef, placeholder, autoComplete, handleClearMsg}) => {
    return (
        <>
        <label htmlFor={id} className="text-blue-700 sr-only font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl"><strong>{label}</strong></label>
        <input
         type={type}
         ref={inputRef}
         placeholder={placeholder}
         name={id}
         id={id}
         autoComplete={autoComplete}
         autoCorrect="on"
         required
         className="w-full p-4 rounded text-gray-700 text-lg outline-none bg-gray-200 border-[1px] border-gray-400"
         onChange={handleClearMsg}
        />
        </>
    );
};
export default LoginInputField;