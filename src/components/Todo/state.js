export function createDefaultState() {
    return {
        mainList: [],
        subList: [],
        createDialogOpen: false,
    };    
}
const reducerFunctions = {
    all: (state, action) => ({
        ...state, 
        ...action,
    }),

    openCreateDialogForMainTodo: (state,{createDialogOpen, target}) =>({ ...state, createDialogOpen , target}),
   
    addMainTodo: (state, newTodo) => {

        return {
            ...state,
            mainList: [
                ...state.mainList,
                newTodo,
            ],
        }
    },

    selectTodo: (state, action) => {

        return {
            ...state,
        }
    },
}

export const reducer = (state, action) => {
    if (action.type && reducerFunctions[action.type]) {
        return reducerFunctions[action.type](state,action);
    }
    return state;
}; 
