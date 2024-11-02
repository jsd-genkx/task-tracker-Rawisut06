import TaskItem from "./TaskItem";

export default function TaskList({tasks, onEdit, onDelete}) {
  return (
    <div className="flex flex-col justify-between gap-2 ">
      {tasks.length === 0 ? (
        <p>No tasks available!</p>
      ) : (
        tasks.map((task) => {
          console.log("render ID:", task.id);
          return (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          )
        }

        )
      )
    }
    </div>
  );
}