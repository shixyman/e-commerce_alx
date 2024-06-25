import { createSlice } from "@reduxjs/toolkit";

// appApi
import appApi from "../services/appApi";

const initialState = null;

export const userSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});
export const { logout, addNotification, resetNotifications } = userSlice.actions;
export default userSlice.reducer;