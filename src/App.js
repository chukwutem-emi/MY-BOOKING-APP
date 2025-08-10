import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Body from "./Components/Body";
import React from "react";
import { persister } from "./Utils/appStore";
import { PersistGate } from "redux-persist/integration/react";
import InstallPrompt from "./Components/InstallPrompt";


const App = () => {
    return (
        <>
        <Provider store={appStore}>
            <PersistGate loading={null} persistor={persister}>
                <h1>CHEMSTENABS&reg;</h1>
                <InstallPrompt />
                <Body />
            </PersistGate>
        </Provider>
        </>
    )
};

export default App;