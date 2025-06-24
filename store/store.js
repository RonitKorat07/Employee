import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../store/EmpSlice.js'

export const store = configureStore({
    reducer: {
        employee : employeeReducer
    } 
})