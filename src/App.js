import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Body from "./Components/Body";
import React from "react";
import { persister } from "./Utils/appStore";
import { PersistGate } from "redux-persist/integration/react";


const App = () => {
    return (
        <>
        <Provider store={appStore}>
            <PersistGate loading={null} persistor={persister}>
                <div className="flex flex-row w-fit mt-[0.5rem] mb-2 bg-amber-400 shadow-2xl z-50 ml-[2rem] px-2 rounded-lg overflow-x-hidden ">
                    <p className="text-blue-800 font-bold font-serif text-lg animate-pulse">CHEM</p>
                    <p className="text-orange-600 font-bold font-sans text-lg animate-pulse">STEN</p>
                    <p className="text-red-800 font-bold font-sans text-lg animate-pulse">ABS&reg;</p>
                </div>
                <Body />
            </PersistGate>
        </Provider>
        </>
    )
};

export default App;