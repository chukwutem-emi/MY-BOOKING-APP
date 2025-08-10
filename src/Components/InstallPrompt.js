import React, { useEffect, useState } from "react"


const InstallPrompt = () => {
    const[deferredPrompt, setDeferredPrompt] = useState(null);
    const[showButton, setShowButton]         = useState(false);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowButton(true);
        }
        window.addEventListener("beforeinstallprompt", handler);
        return () => removeEventListener("beforeinstallprompt", handler)
    }, []);

    const handleButtonClick = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const{outcome} = await deferredPrompt.userChoice;
        console.log(`user response: ${outcome}`);
        setDeferredPrompt(null);
        setShowButton(false);
    };
    return (
        <div>
            {
                showButton && (
                    <button type="button" onClick={handleButtonClick}>Install App</button>
                )
            }
        </div>
    )
};
export default InstallPrompt;