import {createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
    //1
    name:"users",

    //2
initialState:[],

    //3
    reducers : {
        DeleteUserR : (state,action)=>{},
        UpdateUser : (state,action)=>{},
        AddUser : (state,action)=>{},
    }

})