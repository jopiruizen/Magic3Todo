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

    toggleTodoMain: (state,{createDialogOpen}) =>({ ...state, createDialogOpen , target:'main'}),
    toggleTodoSub: (state,{createDialogOpen}) =>({ ...state, createDialogOpen , target:'sub'}),
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

    deleteMain: (state, { item } ) => {
        function deleteReducer (newList, curItem) {
            if( curItem.id !== item.id) {
                return [...newList, curItem];
            }
            return newList;
        }
        const newMainlist = state.mainList.reduce(deleteReducer,[]);
        return {
            ...state,
            mainList: newMainlist,
        }
    },

    deleteSub: (state, { selectedTodo, item } ) => {

        function deleteReducer (newList, subItem) {
            return ( subItem.id !== item.id? [...newList, subItem] : newList);
        }

        const newMainlist = state.mainList.map((mainItem) => {
            if (mainItem.id === selectedTodo.id){
                 return {
                     ...mainItem,
                     sublist: mainItem.sublist.reduce(deleteReducer, []),
                 }
            }
            return {...mainItem};
        });
        return {
            ...state,
            mainList: newMainlist,
            subList: newMainlist.filter((item)=> item.id === selectedTodo.id)[0].sublist, 
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
            subList: (selectedTodo.sublist? selectedTodo.sublist: []),
        }
    },

    addSubTodo: (state, { newTodo, selectedTodo } ) => {
        const newMainList = state.mainList.map((item) => {
            if (selectedTodo.id === item.id) {
                return {
                    ...item,
                    sublist: (item.sublist ? [...item.sublist, newTodo] : [newTodo]),
                }
            }
            return { ...item};
        });
        
        if (selectedTodo) {
            return {
                ...state,
                createDialogOpen: false,
                mainList: newMainList,
                subList: newMainList.filter((item)=> item.id === selectedTodo.id)[0].sublist, 
            }
        }
        return {...state, createDialogOpen: false};
    },
}

export const reducer = (state, action) => {
    if (action.type && reducerFunctions[action.type]) {
        return reducerFunctions[action.type](state,action);
    }
    return state;
}; 
