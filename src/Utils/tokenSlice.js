import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:"token",
    initialState:{
        accessToken:null
    },
    reducers:{
        addAccessToken:(state, action) => {
            state.accessToken = action.payload;
        },
        removeAccessToken:(state) => {
            state.accessToken = null;
        }
    }
});
export const{addAccessToken, removeAccessToken} = tokenSlice.actions;
export default tokenSlice.reducer;