import { useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const handleAddTask = (newTask) => {
    setTasks((prevtasks) => [...prevtasks, newTask])
  }

  const handleEditTask = (taskId, updatedText) =>
    setTasks(prevtasks => prevtasks.map(
      task =>
        task.id === taskId ? { ...task, text: updatedText } : task
    ));

  const handleDeleteTask = (taskId) => {
    setTasks(prevtasks => prevtasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="flex flex-col items-center w-[500px] rounded-md gap-4 p-4 border-black h-fit justify-center bg-slate-200 ">
      <h1 className="text-2xl ">Task tracker</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
    </div>
  )
}