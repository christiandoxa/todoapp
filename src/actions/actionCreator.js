import {ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from "./actionsTypes";

let todoId = 2;

export const addTodo = text => ({
    type: ADD_TODO,
    id: todoId++,
    text
});

export const deleteTodo = id => ({
    type: REMOVE_TODO,
    id
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});