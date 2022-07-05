import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';

function App() {
  const [addBtn, setAddBtn] = useState(true);

  const [allTasks, setAllTasks] = useState([]);

  const addNew = (task) => {
    const id = Math.floor(Math.random() * 100);
    const newtask = { ...task, id };

    setAllTasks([...allTasks, newtask]);
  }

  const delTask = (delId) => {
    setAllTasks(allTasks.filter((task) => task.id != delId));
  }

  return (
    <div className="App">
      <Header addBtn={addBtn} onAddBtn={() => setAddBtn(() => addBtn ? false : true)} onAdd={addNew} />
      {allTasks.length === 0 ? <h4>No Task Yet</h4> : <Lists allTasks={allTasks} onDel={delTask} />} 
    </div>
  );
}

export default App;
