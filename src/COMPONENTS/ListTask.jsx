import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../redux/tasksSlice.jsx';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('done'))}
          className={`px-4 py-2 rounded ${filter === 'done' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          Done
        </button>
        <button
          onClick={() => dispatch(setFilter('notDone'))}
          className={`px-4 py-2 rounded ${filter === 'notDone' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        >
          Not Done
        </button>
      </div>

      <div>
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500 py-4">
            No tasks found. Add a new task!
          </p>
        ) : (
          filteredTasks.map(task => (
            <Task key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListTask;