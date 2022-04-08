import React, { useState, useEffect } from 'react';
import styles from './todo.module.css';
import axios from 'axios';
import DisplayList from '../display-list/display';
import { useDispatch, useSelector } from 'react-redux';
import { readTask, setTask } from '../redux/actions';
import { RootState } from '../redux/reducers';
import { ActionTypes } from '../redux/action-types';
import { TodoListItem } from '../../types';
import { useNavigate } from 'react-router-dom';


function AddTask() {
  const userState = useSelector((state: RootState) => state.todos);
  const [Task, setTask] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addData = async (e: any) => {
    e.preventDefault();

    // try {
    //   const result = await axios.post('http://localhost:8000/todoList', {
    //     Task,
    //   });
    //   dispatch(setTask(result.data));
    // } catch (error) {
    //   console.log(error);
    // }
  };


  useEffect(() => {
    dispatch(readTask(1));
  }, []);

  return (
    <div>
      <form onSubmit={addData}>
        <label>Task:</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Your Task"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button type="submit">Save</button>
      </form>

      <div>
        {userState.loading && <h1>Loading Data...</h1>}
        {userState.tasks.map((item: TodoListItem, index: number) => {
          return (
            <DisplayList
            key={item._id}
            todoItem={item}
            onDelete={(id: string) => {
              console.log(`ONDELETE: ${id}`)
            }}
            onUpdate={(id: string) => {
              console.log(`ONUPDATE: ${id}`)
            }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AddTask;
