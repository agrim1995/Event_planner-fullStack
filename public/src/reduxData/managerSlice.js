import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    upData: null,
};

const managerSlice = createSlice({
    name: "manager",
    initialState,
    reducers: {
        addManagerReducer: (state, action) => {
            state.value.push(action.payload);
        },
        ListManagerReducer: (state, action) => {
            state.value = action.payload ?? [];
        },
        UpdateManagerReducer: (state, action) => {
            console.log("Updating upData:", action.payload);
            state.upData = action.payload;
        },
    },
});

export const { addManagerReducer, ListManagerReducer, UpdateManagerReducer } = managerSlice.actions;
export default managerSlice.reducer;
