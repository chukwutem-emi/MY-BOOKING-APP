import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
    name:"config",
    initialState:{
        lang:"eng"
    },
    reducers:{
        changeLanguageKey:(state, action) =>{
            state.lang = action.payload;
        }
    }
});
export const {changeLanguageKey} = LanguageSlice.actions;
export default LanguageSlice.reducer;