import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import { useAuth } from "./hooks/AuthProvider";

const App = () => {

  const user=useAuth();
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false, important: true },
    {
      id: 2,
      text: "Finish project report",
      completed: false,
      important: false,
    },
    { id: 3, text: "Call the bank", completed: false, important: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask, completed: false, important: false },
      ]);
      setNewTask("");
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <header className="p-4 bg-gray-800 flex items-center justify-between">
        <h1 className="text-xl font-bold">DoIt</h1>
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          onClick={()=>user.logOut()} // Replace with actual logout logic
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-between">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-800 p-4">
          <h2 className="text-lg font-bold mb-4">Hey, ABCD</h2>
          <ul>
            <li className="py-2 px-4 bg-gray-700 rounded mb-2 cursor-pointer">
              Today
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 rounded mb-2 cursor-pointer">
              Important
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 rounded mb-2 cursor-pointer">
              Planned
            </li>
          </ul>
        </aside>

        {/* Task List */}
        <TaskList
          tasks={tasks}
          newTask={newTask}
          setNewTask={setNewTask}
          toggleComplete={toggleComplete}
          toggleImportant={toggleImportant}
          addTask={addTask}
        />

        {/* Task Input */}
        <TaskInput />
      </main>
    </div>
  );
};

export default App;
