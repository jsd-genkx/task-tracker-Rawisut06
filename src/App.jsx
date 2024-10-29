import { useState } from 'react'
import TaskForm from './components/TaskForm';


export default function App() {
  const [tasks, setTasks] = useState([]);

  // function addTask() {
  //   setTasks({
  //     ...tasks,
  //     {id, text,},
  //   });
  // }

  return (
    <>
      <h1>Task tracker</h1>
      <TaskForm />
      <button
        onClick={setTasks(
          ...tasks,
          {
            id: new Date.now(),
            text: name,
          }
        )}>Add</button>
    </>
  )
}