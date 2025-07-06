import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; // ✅ this is the correct one
import userReducer from "./profileSlice"
import tokenReducer from "./tokenSlice"
import langReducer from "./LanguageSlice"


// configuration for redux-persist
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["token", "user", "config"] //only persist token slice

};
//combining reducers first
const rootReducer = combineReducers({
    user:userReducer,
    token:tokenReducer,
    config:langReducer,
});
// creating a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)
const appStore = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:{ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
});
export const persister = persistStore(appStore);
export default appStore;