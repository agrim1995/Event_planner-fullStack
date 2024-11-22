import { createSlice } from "@reduxjs/toolkit";


const savedAuthInfo = JSON.parse(localStorage.getItem("authInfo"));

const initialState = {
    value: savedAuthInfo || {
        id: undefined,
        contact: undefined,
        email: undefined,
        name: undefined,
        token: undefined,
        role: undefined,
        roleid: undefined,
        islogin: false

    },
    rolesValue: [],
    // againLogin: {
    //     saloonName: undefined,
    //     uid: undefined,
    //     token: undefined,
    //     isLogin: false,
    //     firstname: undefined,
    //     lastname: undefined,
    //     role: undefined,
    //     roleValue: undefined,
    //     saloon_logo: undefined,
    //     currency: undefined
    // }

};
const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        authDetailReducer: (state, action) => {
            state.value = action.payload
            localStorage.setItem("authInfo", JSON.stringify(action.payload));
        },
        roleListReducer: (state, action) => {
            state.rolesValue = action.payload
        },
        // loginAgainReducer: (state, action) => {
        //     state.value = action.payload
        //     localStorage.setItem("uinfo", JSON.stringify(action.payload));
        // },
    }
})


export const { authDetailReducer, roleListReducer } = slice.actions
export default slice.reducer








