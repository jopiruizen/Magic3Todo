import { createSelector } from 'reselect';

const getTodos = state => state.todo.todos;
export const getTodosState = createSelector(
  [getTodos],
  data => data,
);


const addMainTodos = state => state.todo.todos;
export const addMainTodosState = createSelector(
  [addMainTodos],
  data => data,
);
