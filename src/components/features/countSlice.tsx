import { createSlice } from "@reduxjs/toolkit";
type CountType={
    son:number
}

export const initialState = {
    son: 5,
}
export const countSlice = createSlice({
    name: "count",
    initialState: initialState,
    reducers: {
    add:(state:CountType,action:{payload:number})=>{
        state.son=state.son+action.payload
    }
}
});
export const {add}=countSlice.actions;

export default countSlice.reducer;