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
        return {
            ...state,
            createDialogOpen: false,
            mainList: [
                ...state.mainList,
                {...newTodo},
            ],
        }
    },

    
    selectTodo: (state, { selectedTodo }) => {
        return {
            ...state,
            mainList: state.mainList.map((item) => {
                if(item.id === selectedTodo.id) {
                    return {...item, selected: true};
                }
                return  {...item, selected: false};
            }),
        }
    },
}

export const reducer = (state, action) => {
    if (action.type && reducerFunctions[action.type]) {
        return reducerFunctions[action.type](state,action);
    }
    return state;
}; 
