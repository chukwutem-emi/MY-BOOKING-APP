import { createSlice } from "@reduxjs/toolkit";


const getUserSlice = createSlice({
    name:"info",
    initialState: {
        userInfo:null
    },
    reducers: {
        addUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        addUserPassword: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUserInfo: (state) => {
            state.userInfo = null;
        }
    }
});
export const{addUserInfo, removeUserInfo, addUserPassword} = getUserSlice.actions;
export default getUserSlice.reducer;