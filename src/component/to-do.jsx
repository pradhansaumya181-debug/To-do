import React, { useEffect, useState } from "react";

function TodoApp({ setIsLoggedIn }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(getItem);
  }, []);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔥 Top Right Logout */}
      <div className="flex justify-end p-4">
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-200"
        >
          Logout
        </button>
      </div>

      {/* 🔥 Center Content */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-bold mb-6">Todo List</h1>

        {/* Input Section */}
        <div className="flex gap-2">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
            className="px-4 py-2 border rounded-lg w-72 outline-none"
          />

          <button
            onClick={addTask}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="mt-6 w-80">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white p-3 mb-2 rounded-lg shadow"
            >
              <span>{t}</span>

              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
