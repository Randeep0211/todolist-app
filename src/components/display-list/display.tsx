import React from 'react';
import styles from './display.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TodoListItem } from '../../types';

interface DisplayListProps {
  todoItem: TodoListItem;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}

const DisplayList: React.FC<DisplayListProps> = ({
  todoItem,
  onDelete,
  onUpdate,
}: DisplayListProps) => {
  return (
    <div>
      <div className={styles.container}>
        <p>{todoItem.task}</p>
        <button type="button" onClick={() => onUpdate(todoItem._id)}>
          Update
        </button>
        <button type="button" onClick={() => onDelete(todoItem._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DisplayList;
