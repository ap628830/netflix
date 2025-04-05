import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        SetUser: (state,action)=> {
            return action.payload
        },
        RemoveUser: (state)=>{
           return null
        }
    }
})

export default userSlice.reducer
export const {SetUser, RemoveUser} = userSlice.actions