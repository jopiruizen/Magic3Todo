
const addMainTodo = (state, todoItem) => {
    return {
       ...state,
       todo: [...state.todo, todoItem],
    };
}

const deleteTodoItem = (state, item) => {
    const newTodo = [];
    return {
        ...state,
        newTodo,
    };
}

  
export default {
    reducers: {
        addMainTodo,
     },
};