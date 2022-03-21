import React, { useState, useEffect } from "react";
import styles from "./todo.module.css";
import axios from "axios";
import DisplayList from "../display-list/display";

interface todoListProps {
  Task: string;
  _id: string;
}

function AddTask() {
  const [data, setData] = React.useState<todoListProps[]>([]);
  const [Task, setTask] = useState("");

  const addData = async (e: any) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8000/todoList", {
        Task,
      });

      setTask("");
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:8000/Read");
      setData(result.data.response);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form>
        <label>Task:</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Your Task"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button type="submit" onClick={addData}>
          Save
        </button>
      </form>

      <div>
        {data.map((el, index) => {
          return (
            <DisplayList
              key={index}
              Task={el.Task}
              id={el._id}
              onDelete={getData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AddTask;
