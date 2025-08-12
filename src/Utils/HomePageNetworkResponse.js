import React, { useEffect, useState } from "react";


const HomePageNetworkResponse = () => {
    const[network, setNetwork]  = useState(navigator.onLine);
    useEffect(() => {
        const offline = () => setNetwork(false);
        const onLine = () => setNetwork(true);
        window.addEventListener("online", onLine);
        window.addEventListener("offline", offline);

        return () => {
            window.removeEventListener("online", onLine);
            window.removeEventListener("offline", offline);
        }
    }, []);
    return (
        <div className="text-center w-fit mx-auto p-4 text-lg font-sans font-bold animate-pulse rounded-lg z-50 shadow-2xl">
            {
                network ? (
                    <div className="text-green-800 bg-green-50">🟢 Online</div>
                ) : (
                    <div className="text-red-600 bg-red-50">You are currently offline. Please check your internet connection.</div>
                )
            }
        </div>
    )
};
export default HomePageNetworkResponse;