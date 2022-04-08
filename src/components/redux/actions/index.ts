import { TodoListItem } from '../../../types';
import { ActionTypes } from '../action-types';

export const setTask = (tasks: {}) => {
  return {
    type: ActionTypes.ADD_TASK,
    payload: tasks,
  };
};

export const readTask = (id: number) => ({
  type: ActionTypes.READ_DATA,
  payload: { id: id },
});

export const taskListSuccess = (taskList: Array<TodoListItem>) => ({
    type: ActionTypes.READ_DATA_SUCCESS,
    payload: taskList
})
export const taskListFailure = () => ({type: ActionTypes.READ_DATA_FAILURE})

// export const updateData = (update:{})=>{
//     return {
//         type:ActionTypes.UPDATE_DATA,
//         payload: update
//     }
// }

// export const deleteData = (deleteTask:any)=>{
//     return {
//         type:ActionTypes.DELETE_DATA,
//         payload: deleteTask
//     }
// }
