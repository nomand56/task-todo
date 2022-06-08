export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
    
        case "Move_TODO":
            return console.log(state.filter(todo => todo.isDone !==action.payload.isDone));
        default:
            return state;
        
        }
    }