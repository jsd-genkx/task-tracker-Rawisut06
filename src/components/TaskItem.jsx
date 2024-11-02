import { useState } from "react";

export default function TaskItem({task, onEdit, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  console.log(editText);

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = () => {
    onEdit(task.id, editText);
    setIsEditing(false);
  }

  const handleCancelClick = () => {
    setEditText(task.text);
    setIsEditing(false);
  }

  const handleDeleteClick = () => {
    onDelete(task.id);
  }

  return (
    <div className="flex justify-between p-2 rounded-md w-96 bg-slate-300">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={e => setEditText(e.target.value)}
        />
      ) :
        <p>{task.text}</p>
      }
      <div>
        {isEditing ? (
          <div className="flex gap-4">
            <button
              onClick={handleSaveClick}
              className="text-red-500"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="text-blue-500"
            >
              Cancel
            </button>
          </div>
        ) :
          <div className="flex gap-4">
            <button
              onClick={handleEditClick}
              className="text-green-500"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              className="text-red-800"
            >
              Delete
            </button>
          </div>
        }
      </div>
    </div>
  )
}