import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:"userSlice",
    initialState:{
        value:{
           
           name: undefined,
            contact: undefined,
            email: undefined,
            userRole: undefined,
            islogin:false
        }
    },
    reducers:{
        storeUserInfo(state,action)
    {
      var data=action.payload;
      console.log("inside Data : "+data);
      state.value=data
    }   
 }
})
export const{storeUserInfo}=slice.actions;
export default  slice.reducer;