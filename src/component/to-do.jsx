import React, { useState } from "react";

function TodoApp() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

  // Add Task
    const addTask = () => {
        if (task.trim() === "") return;

        setTasks([...tasks, task]);
        setTask("");
    };

  // Delete Task
    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

        <h1 className="text-2xl font-bold mb-4">Todo List</h1>

        {/* Input */}
        <div className="flex gap-2">
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
            className="px-4 py-2 border rounded"
        />

        <button
            onClick={addTask}
            className="bg-green-600 text-white px-4 py-2 rounded"
        >
            Add
        </button>
        </div>

    {/* List */}
    <ul className="mt-6 w-[300px]">
        {tasks.map((t, index) => (
            <li
                key={index}
                className="flex justify-between bg-white p-2 mb-2 rounded shadow"
            >
                <span>{t}</span>

                <button
                    onClick={() => deleteTask(index)}
                    className="text-red-500"
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>

    </div>
);
}

export default TodoApp;