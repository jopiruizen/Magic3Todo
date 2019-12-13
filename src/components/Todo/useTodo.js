import  { useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { reducer, createDefaultState} from './state';


function useTodo (props) {
    
    
    const [reducedState, dispatch] = useReducer(reducer, createDefaultState());
    const [todoLabel, setTodoLabel] = useState('');
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [subVisible, setSubVisible] = useState(false);

    function handleMainComplete(data) {

    }

    function handleMainDelete(data) {
        dispatch({ type: 'deleteMain', item: data });
    }

    function handleSubComplete(data) {

    }

    function handleSubDelete(data) {
        dispatch({ type: 'deleteSub', item: data , selectedTodo});
    }

    function handleMainSelect(data){
        setSelectedTodo(data);
        setSubVisible(true);
        dispatch({ type: 'selectTodo', selectedTodo: data });
    }

    function createMainTodo(){
        dispatch( { type: 'toggleTodoMain', createDialogOpen: true } );
    }

    function createSubTodo() {
        dispatch( { type: 'toggleTodoSub', createDialogOpen: true } );
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
        subVisible,
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