import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchemp = createAsyncThunk(
    'employee/fetch',
    async () => {
        const res = await fetch("https://68564a161789e182b37d9214.mockapi.io/employee")
        const data = await res.json();
        return data;
    }
)

export const addemp = createAsyncThunk(
    'employee/add',
    async (newEmployee) => {
        const res = await fetch("https://68564a161789e182b37d9214.mockapi.io/employee",{
           method : 'POST',
           headers : {
            'Content-Type' : 'application/json' 
           },
           body : JSON.stringify(newEmployee)
        })
    const data = await res.json();
    return data;
    }
)

export const editemp = createAsyncThunk(
    'employee/edit',
    async (emp) => {
        const res = await fetch(`https://68564a161789e182b37d9214.mockapi.io/employee/${emp.id}`,{
           method : 'PUT',
           headers : {
            'Content-Type' : 'application/json' 
           },
           body : JSON.stringify(emp)
        })
    const data = await res.json();
    return data;
    }
)
export const delemp = createAsyncThunk(
    'employee/delete',
    async (id) => {
        const res = await fetch(`https://68564a161789e182b37d9214.mockapi.io/employee/${id}`,{
           method : 'DELETE',
           })
    return id;
    }
)

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employee: []
    },
    reducers: {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchemp.fulfilled , (state , action)=>{
            state.employee = action.payload;
        })
        .addCase(addemp.fulfilled , (state , action)=>{
            state.employee.push(action.payload);
        })
        .addCase(delemp.fulfilled , (state , action)=>{
            state.employee = state.employee.filter(emp => emp.id !== action.payload)
        })
        .addCase(editemp.fulfilled , (state , action)=>{
            const update = action.payload
            state.employee = state.employee.map(emp => emp.id == update.id ? update : emp)
        })
    }

})

export default employeeSlice.reducer