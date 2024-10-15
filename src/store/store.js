import { configureStore } from "@reduxjs/toolkit";
import  AdminSlice  from './../reducers/adminSlice';

export const  store = configureStore({
    reducer: {
        AdminSlice : AdminSlice
    }
})