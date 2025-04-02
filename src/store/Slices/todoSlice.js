import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api/api";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        text: "",
        todos: [],
        loading: false
    },
    reducers: {
        changeLoad(state) {
            state.loading = !state.loading
        },
        changeText(state, action) {
            state.text = action.payload
        },
        add(state, action) {
            state.todos = [...state.todos, action.payload],
                state.text = ""
        },
        getToDO(state, action) {
            state.todos = action.payload
        },
        updateTodo(state, action) {
            const { id, data } = action.payload;
            
            console.log(data)
            state.todos = state.todos.map(todo =>
                todo.id === id ? { ...todo, ...data } : todo
            );
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
})

export const getasyncToDo = createAsyncThunk("getasyncToDo",
    async (_, { dispatch }) => {
        dispatch(changeLoad())
        const res = await API.getToDO()
        dispatch(getToDO(res.data))
        dispatch(changeLoad())
    }
)

export const postasyncToDo = createAsyncThunk("postasyncToDo",
    async (newToDO, { dispatch }) => {
        dispatch(changeLoad())
        const res = await API.postToDO(newToDO);
        dispatch(add(res.data));
        dispatch(changeLoad())
    }
)

export const patchasyncToDo = createAsyncThunk("patchasyncToDo",
    async ({ id, data }, { dispatch }) => {
        dispatch(changeLoad())
        const response = await API.patchToDo(id, data);
        dispatch(updateTodo({ id, data: response.data }));
        dispatch(changeLoad())
    }
);

export const deleteasyncToDo = createAsyncThunk("deleteasyncToDo",
    async (id, { dispatch }) => {
        dispatch(changeLoad())
        await API.deleteToDo(id);
        dispatch(removeTodo(id));
        dispatch(changeLoad())
    }
);

export const { changeText, add, getToDO, changeLoad,updateTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer