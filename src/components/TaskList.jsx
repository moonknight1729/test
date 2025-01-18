import React from "react";

const TaskList = ({tasks,newTask,setNewTask,toggleComplete,toggleImportant,addTask}) => {
  return (
    <div>
      <section className="flex-1 p-4">
        <div className="mb-4">
          <input
            type="text"
            className="w-2/3 p-2 rounded text-black"
            placeholder="Add a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="ml-2 p-2 bg-green-600 rounded hover:bg-green-500"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-800 p-2 mb-2 rounded"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <span
                  className={task.completed ? "line-through text-gray-500" : ""}
                >
                  {task.text}
                </span>
              </div>
              <button
                className={`ml-2 p-1 rounded ${
                  task.important
                    ? "bg-yellow-500 hover:bg-yellow-400"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => toggleImportant(task.id)}
              >
                ★
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TaskList;
