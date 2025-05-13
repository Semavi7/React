import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    user: [],
    loading: false
}

export const getAllUsers = createAsyncThunk('user', async () => {
    const response = await axios.get("https:///jsonplaceholder.typicode.com/users");
    return response.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //Http isteği olmaz ise kullanılır !
    },
    extraReducers: (builder) => {
        //Http isteklerinde kullanılır !
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer