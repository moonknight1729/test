import React, { useState } from "react";
import BasicDatePicker from "./BasicDatePicker";
import BasicTimePicker from "./BasicTimePicker";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import axios from "axios";

const TaskInput = () => {
  // Single task state object
  const [task, setTask] = useState({
    title: "",
    reminder: null,
    dueDate: null,
    repeat: false,
    description: "",
    priority: "",
    important: false,
  });

  // Error state for validation
  const [error, setError] = useState("");

  // Update specific fields in the task state
  const updateTask = (field, value) => {
    setTask((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (task.title=="") {
      setError("Task title is required.");

      return;
    }
    if (task.reminder==null) {
      setError("Reminder time is required");
      return;
    }
    if (task.dueDate==null) {
      setError("Due date is required.");
      return;
    }
    if (!task.priority) {
      setError("Priority is required.");
      return;
    }

    // Clear error if validation passes
    setError("");

    axios
      .post("http://localhost:3000/tasks", task)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("Task Submitted:", task);

    // Reset form fields after submission
    setTask({
      title: "",
      reminder: "",
      dueDate: null,
      repeat: false,
      description: "",
      priority: "",
      important: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/3 bg-gray-900 text-white p-4 border-l border-gray-700"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Create a New Task</h2>
        <button type="button" className="text-gray-500 hover:text-white">
          ✕
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm mb-4">
          <strong>Error: </strong> {error}
        </div>
      )}

      <ul className="space-y-4">
        {/* Task Title Input */}
        <div className="mb-4 flex flex-row gap-[5px]">
          <input
            type="text"
            className="w-2/3 p-2 rounded text-black"
            placeholder="Task Title (required)"
            value={task.title}
            onChange={(e) => updateTask("title", e.target.value)} // Update title
          />
          <button
            type="button"
            onClick={() => updateTask("important", !task.important)} // Toggle important
            className={task.important ? "text-yellow-500" : ""}
          >
            ★
          </button>
        </div>

        {/* Reminder Field */}
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">🔔</span>
          <BasicTimePicker
            onChange={(time) => updateTask("reminder", time)} // Update reminder
          />
        </li>

        {/* Due Date Field */}
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">📅</span>
          <BasicDatePicker
            onChange={(date) => updateTask("dueDate", date)} // Update dueDate
          />
        </li>

        {/* Repeat Field */}
        <li className="flex items-center cursor-pointer gap-[10px]">
          <span className="mr-2">🔁</span>
          <span> Repeat</span>
          <input
            type="checkbox"
            checked={task.repeat}
            onChange={(e) => updateTask("repeat", e.target.checked)} // Update repeat
          />
        </li>

        {/* Priority Dropdown */}
        <li className="flex items-center cursor-pointer gap-[10px]">
          <span className="mr-2">⚡</span>
          <FormControl fullWidth size="small">
            <InputLabel style={{ color: "white" }}>Priority</InputLabel>
            <Select
              value={task.priority}
              onChange={(e) => updateTask("priority", e.target.value)} // Update priority
              style={{ background: "white", color: "black" }}
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </li>
      </ul>

      {/* Description Field */}
      <textarea
        className="w-full mt-4 p-2 rounded bg-gray-800 text-white"
        placeholder="Add Notes (optional)"
        rows="4"
        value={task.description}
        onChange={(e) => updateTask("description", e.target.value)} // Update description
      ></textarea>

      {/* Add Task Button */}
      <div className="flex items-center justify-end mt-4">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#4CAF50" }}
        >
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default TaskInput;
