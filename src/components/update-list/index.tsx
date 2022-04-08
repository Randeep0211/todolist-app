import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface UpdateListProps {
  Task: string;
  id: string;
}

function UpdateList() {
  const [Task, setTask] = useState('');

  const response = useParams();
  const id = response.id;

  const updateData = async () => {
    try {
      const update: React.FC<UpdateListProps> = await axios.put(
        `http://localhost:8000/update/${id}`,
        {
          Task,
        }
      );
      //   setTask("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form>
        <label>Update Task:</label>
        <input
          type="text"
          placeholder="Enter Your Task"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button type="submit" onClick={updateData}>
          Save
        </button>
      </form>
    </div>
  );
}

export default UpdateList;
