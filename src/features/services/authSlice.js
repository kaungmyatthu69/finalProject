import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
export const authSlice=createSlice({
    name:'auth',
    initialState:{user:null,token:null},
    reducers:{
        addUser:(state,action)=>{
            // console.log('from rtk',action.payload);
            state.user=action.payload.user;
            state.token=action.payload.token
            Cookies.set("user",JSON.stringify(state.user),{ expires: 1 }),
            Cookies.set("token",state.token,{ expires: 1})
        },
        removeUser:(state,action)=>{
            state.user=null,
            state.token=null
            Cookies.remove('user'),
            Cookies.remove('token')

        }
    }

})
export const {addUser,removeUser}=authSlice.actions;
export default authSlice.reducer;