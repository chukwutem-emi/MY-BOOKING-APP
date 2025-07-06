import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Body from "./Components/Body";
import React from "react";
import { persister } from "./Utils/appStore";
import { PersistGate } from "redux-persist/integration/react";


const App = () => {
    return (
        <Provider store={appStore}>
            <PersistGate loading={null} persistor={persister}>
                <Body />
            </PersistGate>
        </Provider>
    )
};

export default App;