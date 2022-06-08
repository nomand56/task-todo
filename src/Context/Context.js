import React, { createContext,useReducer} from "react";
import { todoReducer } from "./Reducer";

const initialState = [
    {
        id: 1, Name: "Learn React", isDone: false 
    }
]

export const todoContext = createContext(initialState);

export const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const Add_Todo = (todo) => {  
        dispatch({  
            type: 'ADD_TODO',
            payload: todo,
        })}

        const Move_TODO = (todo) => {
            dispatch({
                type: 'Move_TODO',
                payload:todo
            })}
    return (
        <todoContext.Provider value={{ state,
        Add_Todo,
        Move_TODO,
        
        dispatch }}>



            {props.children}
        </todoContext.Provider>
    )
}

