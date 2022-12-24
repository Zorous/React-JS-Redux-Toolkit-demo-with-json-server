import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts= createAsyncThunk("products/getProducts", async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
   const res = await fetch('http://localhost:4000/products')    
   const data = await res.json()
   return data 
    }
    catch(error){
        return rejectWithValue(error.message)
     }

})

export const ProductsSlice = createSlice({
    //1
    name:"products",

    //2
    initialState: {
        products:[],
        isLoading:false,
        error : null
    },

    //3
    reducers : {
        handleDeleteR : (state,action)=>{
            alert('Are you sure you want to delete this item?')
            state = state.filter(i=>(action.payload !== i.id))
            return state
        },
    
        handleInsert :(state,action)=>{
          
        state.push({
            id: state.length + 1,
            title:action.payload.title,
            category:action.payload.category,
            images:[action.payload.image]
        })
        //  console.log(state)
         return state
        }
        ,
        updateProduct:(state,action)=>{
            // alert('update')
            console.log(action.payload)
            const objIndex = state.findIndex((i)=>i.id == action.payload.id)
            // alert(objIndex)
            state[objIndex].title=action.payload.titleN
            state[objIndex].category=action.payload.categoryN

            console.log(state)
            return state
        },
        TestAccess : ()=>{
            alert('tada!')
        }
    },
    extraReducers:{
        [getProducts.pending]:(state,action) =>{
state.isLoading=true
state.error = null
        },
        [getProducts.fulfilled]:(state,action) =>{
state.isLoading=false
state.products=action.payload
console.log(action)

        },
        [getProducts.rejected]:(state,action) =>{
state.isLoading=false
console.log(action)
state.error = action.payload

        },
    }

})

export const {handleDeleteR,updateProduct,handleInsert,TestAccess} = ProductsSlice.actions


export default ProductsSlice.reducer;

