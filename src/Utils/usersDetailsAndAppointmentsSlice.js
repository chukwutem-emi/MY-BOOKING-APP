import { createSlice, isAction } from "@reduxjs/toolkit";

const usersDetailsAndAppointmentSlice = createSlice({
    name:"details",
    initialState:{
        usersDetails:null,
        appointmentDetails:null,
    },
    reducers:{
        addUsersDetails: (state, action) => {
            state.usersDetails = action.payload;
        },
        removeUsersDetails: (state) => {
            state.usersDetails = null;
        },
        addAppointmentDetails: (state, action) => {
            state.appointmentDetails = action.payload;
        },
        removeAppointmentDetails: (state) => {
            state.appointmentDetails = null;
        }
    }
});
export const{addUsersDetails, removeUsersDetails, addAppointmentDetails, removeAppointmentDetails} = usersDetailsAndAppointmentSlice.actions;
export default usersDetailsAndAppointmentSlice.reducer;