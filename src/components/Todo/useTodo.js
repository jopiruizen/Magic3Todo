import  { useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { reducer, createDefaultState} from './state';


function useTodo (props) {
    
    
    const [reducedState, dispatch] = useReducer(reducer, createDefaultState());
    const [todoLabel, setTodoLabel] = useState('');
    const [selectedTodo, setSelectedTodo] = useState(null);

    function handleMainComplete(data) {

    }

    function handleMainDelete(data) {

    }

    function handleSubComplete(data) {

    }

    function handleSubDelete(data) {

    }

    function handleMainSelect(data){
        console.log("");
        console.log("");
        console.log("handleMainSelect()");
        console.log(data);
        setSelectedTodo(data);
        dispatch({ type: 'selectTodo', selectedTodo: data });
    }

    function createMainTodo(){
        dispatch( { type: 'toggleTodoMain', createDialogOpen: true } );
    }

    function createSubTodo() {
       
    }

    function handleDialogClose() {
        dispatch( { type: 'toggleTodoMain', createDialogOpen: false });
    }

    function handleDialogAdd() {
        const target = reducedState.target;
        const newTodo = {
            id: todoLabel,
            label: todoLabel,
            completed: false,
        }
        if( target === 'main') {
            dispatch({ type: 'addMainTodo', newTodo });
        } else {
            dispatch({ type: 'addSubTodo', newTodo, selectedTodo });
        }
      
    }

    function handleTextChange(event){
        setTodoLabel(event.target.value);
    }

    
    return {
        ...reducedState,
        createMainTodo,
        createSubTodo,
        handleMainComplete,
        handleMainDelete,
        handleMainSelect,

        handleSubComplete,
        handleSubDelete,

        handleDialogClose,
        handleDialogAdd,
        handleTextChange,
    };
}

export default useTodo;