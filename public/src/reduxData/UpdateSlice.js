import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : "updateData",
    initialState:{
        value : undefined
    },
    reducers:{
        updateRec : (state,action)=>{
            state.value = action.payload
        }
    }
})

export const {updateRec} = slice.actions
export default slice.reducer;