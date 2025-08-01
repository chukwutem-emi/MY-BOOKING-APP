import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; // ✅ this is the correct one
import tokenReducer from "./tokenSlice"
import langReducer from "./LanguageSlice"
import userInfoReducer from "./getUserSlice"
import appointmentReducer from "./usersDetailsAndAppointmentsSlice"

// configuration for redux-persist
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["token", "config", "info", "details"] //only persist token slice

};
//combining reducers first
const rootReducer = combineReducers({
    token:tokenReducer,
    config:langReducer,
    info:userInfoReducer,
    details:appointmentReducer
});
// creating a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)
const appStore = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:{ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
});
export const persister = persistStore(appStore);
export default appStore;