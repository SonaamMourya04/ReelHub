import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload; // Assuming you want to set the user state
        },
        removeUser: (state,action) => {
            return null; // Resetting user state to null
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
