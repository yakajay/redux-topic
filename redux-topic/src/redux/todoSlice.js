import { createSlice } from '@reduxjs/toolkit';

let startId = 1;

const todoSlice = createSlice({
    name: "ajay",
    initialState: {
        list: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push({id: startId ++, text: action.payload})
        }
    }
})

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;