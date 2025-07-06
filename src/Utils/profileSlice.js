import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user", 
    initialState:{
        username:null,
        email_address:null,
        phone_number:null,
        password:null
        
    },
    reducers: {
        addUsername:(state, action) => {
            state.username = action.payload;
        },
        addEmailAddress:(state, action) => {
            state.email_address = action.payload;
        },
        addPhoneNumber:(state, action) => {
            state.phone_number = action.payload;
        },
        addPassword:(state, action) => {
            state.password = action.payload;
        }
    }
});

export const{addUsername, addEmailAddress, addPhoneNumber, addPassword} = userSlice.actions;
export default userSlice.reducer;