import React from 'react';
import AddTask from '../components/todo-list';
import UpdateList from '../components/update-list';
import { Routes, Route } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<AddTask />} />
          <Route path="/update/:id" element={<UpdateList />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Homepage;
