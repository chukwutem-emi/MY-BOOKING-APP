import React, { useEffect, useState } from "react";


const NetworkStatus = () => {
    const[isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);
    return (
        <div className="mt-5 text-white bg-blue-950 font-semibold px-3 py-1 rounded-md xs:text-[0.7rem] xs:font-sans xs:font-semibold sm:text-lg sm:font-extrabold md:text-xl lg:text-2xl xl:text-2xl xl:p-2">Status:{isOnline ? "Online 🟢" : "Offline 🔴"}</div>
    )
};
export default NetworkStatus;