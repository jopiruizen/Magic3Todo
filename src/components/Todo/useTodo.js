import  { useEffect, useReducer } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { reducer, createDefaultState} from './state';


function useTodo (props) {
    
    
    const [reducedState, reducerDispatch] = useReducer(reducer, createDefaultState());

    function handleMainComplete(data) {

    }

    function handleMainDelete(data) {

    }

    function handleSubComplete(data) {

    }

    function handleSubDelete(data) {

    }

    function createMainTodo(){
        reducerDispatch(
            {
                type: 'toggleTodoMain',
                createDialogOpen: true,
            }
        )
    }

    function createSubTodo() {
       
    }

    function handleDialogClose() {
        reducerDispatch(
            {
                type: 'toggleTodoMain',
                createDialogOpen: false,
            }
        )
    }

    return {
        ...reducedState,
        createMainTodo,
        createSubTodo,
        handleMainComplete,
        handleMainDelete,
        handleSubComplete,
        handleSubDelete,
        handleDialogClose,
    };
}

export default useTodo;