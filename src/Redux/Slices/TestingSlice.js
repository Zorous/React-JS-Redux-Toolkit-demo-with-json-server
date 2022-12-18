import {createSlice } from "@reduxjs/toolkit";


export const TestSlice = createSlice({
    name:"test",
    initialState:[
        {id:1,name:"Oussama",hobby:"programming"},
        {id:2,name:"Mordred",hobby:"fighting"},
    ],
    reducers : {
        DeleteRow : (state,action)=>{
            alert('delete')
            state = state.filter(i=>(action.payload !== i.id))
            return state
        }
    }
})

export const {DeleteRow} = TestSlice.actions

export default TestSlice.reducer

