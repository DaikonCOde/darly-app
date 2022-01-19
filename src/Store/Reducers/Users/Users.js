import { createSlice } from "@reduxjs/toolkit";

export const Users = createSlice({
    name: "Users",
    initialState: {
        currentUser: null,
    },
    reducers: {
        signInUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
})

export const { signInUser } = Users.actions

export default Users.reducer;