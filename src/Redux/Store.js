import { configureStore} from "@reduxjs/toolkit";
import { usersSlice } from "./Slices/UsersSlice";
import { TestSlice } from "./Slices/TestingSlice";
import{ ProductsSlice} from "./Slices/ProductsSlice";
import { UsersSlice2 } from "./Slices/UsersSlice2";



//to minizme our code
// export const action=(id)=>{
//     return({
//         type:"products/deleteproduct",
//         payload:id
//     })
// }



//Configuing our store
export const Store = configureStore({
    reducer:{
        products: ProductsSlice.reducer,
        users: usersSlice.reducer,
        testX: TestSlice.reducer,
        users2 : UsersSlice2.reducer
    }
})