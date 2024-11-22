import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice ({
    name: 'Todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state , action) => {
            state.todos.push ({
                title: action.payload.title,
                id: nanoid()
            })
        },
        deleteItems: (state , action) => {
            state.todos.splice (action.payload.index , 1)
        },
        updateTodo: (state , action) => {
            console.log (action.payload.title)
            state.todos.splice (action.payload.index , 1 , {title: action.payload.title , id: nanoid()})
        }

    }
})

export const {addTodo , deleteItems , updateTodo} = todoSlice.actions
export default todoSlice.reducer