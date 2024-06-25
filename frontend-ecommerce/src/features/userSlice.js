import { createSlice } from "@reduxjs/toolkit";

// appApi
import appApi from "../services/appApi";

const initialState = null;

export const userSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        logout: () => initialState,
        addNotification: (state, action) => {
            state.notifications.unshift(action.payload);
        },
        resetNotifications: (state) => {
            state.notifications.forEach((obj) => {
                obj.status = "read";
            });
        },
    },
   
});
export const { logout, addNotification, resetNotifications } = userSlice.actions;
export default userSlice.reducer;