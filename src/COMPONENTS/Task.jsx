import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/tasksSlice.jsx';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      dispatch(editTask({ id: task.id, newDescription: editText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
          className="w-5 h-5"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-2 py-1 border rounded"
            autoFocus
          />
        ) : (
          <span className={`flex-1 ${task.isDone ? 'line-through text-gray-500' : ''}`}>
            {task.description}
          </span>
        )}
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default Task;