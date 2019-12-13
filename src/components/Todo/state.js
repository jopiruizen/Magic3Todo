export function createDefaultState() {
    return {
        mainList: [],
        subList: [],
        createDialogOpen: false,
        textValue: '',
    };    
}
const reducerFunctions = {
    all: (state, action) => ({
        ...state, 
        ...action,
    }),

    toggleTodoMain: (state,{createDialogOpen, target}) =>({ ...state, createDialogOpen , target:'main'}),
    textValueChange: (state,{textValue}) => ({...state, textValue}),

    addMainTodo: (state, { newTodo } ) => {


        console.log("");
        console.log("mainList");
        console.log(state.mainList);
        return {
            ...state,
            createDialogOpen: false,
            mainList: [
                ...state.mainList,
                {...newTodo},
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
