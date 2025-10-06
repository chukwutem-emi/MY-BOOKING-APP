import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/multiLanguageConfig";


const NetworkStatus = () => {
    const[isOnline, setIsOnline] = useState(navigator.onLine);

    const langKey = useSelector((store) => store.config?.lang);
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
        <div className="mt-5 text-white bg-gradient-to-l from-indigo-600 to-cyan-400 font-semibold px-3 py-1 rounded-md xs:text-[0.7rem] xs:font-sans xs:font-semibold sm:text-lg sm:font-extrabold md:text-xl lg:text-2xl xl:text-2xl xl:p-2">{lang[langKey]?.userNetworkStatus?.status}&nbsp;:&nbsp;{isOnline ? (<>{lang[langKey]?.userNetworkStatus?.online} 🟢</>): (<>{lang[langKey]?.userNetworkStatus?.offline} 🔴</>)}</div>
    )
};
export default NetworkStatus;