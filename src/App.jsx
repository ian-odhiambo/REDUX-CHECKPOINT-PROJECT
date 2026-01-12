import React from 'react';
import AddTask from './components/AddTask.jsx';
import ListTask from './components/ListTask.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          ToDo Application with Redux
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <AddTask />
          <ListTask />
        </div>
        
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>Total tasks: Click to edit, checkbox to mark as done</p>
        </div>
      </div>
    </div>
  );
}

export default App;