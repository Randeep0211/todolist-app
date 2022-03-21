import React from "react";
import styles from "./display.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

interface DisplayListProps {
  Task: string;
  id: string;
  onDelete: () => void;
}

const DisplayList: React.FC<DisplayListProps> = (props) => {
  let navigate = useNavigate();

  const deleteData = async () => {
    try {
      const result = await axios.delete(
        `http://localhost:8000/Delete/${props.id}`
      );
      props.onDelete();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={styles.container}>
        <p>{props.Task}</p>
        <button
          type="submit"
          onClick={() => {
            navigate(`/update/${props.id}`);
          }}
        >
          Update
        </button>
        <button type="submit" onClick={deleteData}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DisplayList;
