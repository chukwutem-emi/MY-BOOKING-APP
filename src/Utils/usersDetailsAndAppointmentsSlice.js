import { createSlice, isAction } from "@reduxjs/toolkit";

const usersDetailsAndAppointmentSlice = createSlice({
    name:"details",
    initialState:{
        usersDetails:[],
        appointmentDetails:[],
        personnelDetails:[]
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
        },
        addPersonnelDetails: (state, action) => {
            state.personnelDetails = action.payload;
        },
        removePersonnelDetails: (state) => {
            state.personnelDetails = null;
        }

    }
});
export const{
    addUsersDetails, 
    removeUsersDetails, 
    addAppointmentDetails, 
    removeAppointmentDetails,
    addPersonnelDetails,
    removePersonnelDetails
} = usersDetailsAndAppointmentSlice.actions;
export default usersDetailsAndAppointmentSlice.reducer;