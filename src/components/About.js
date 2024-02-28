import React, { useState } from 'react';

function App() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = e => {
        setTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleDelete = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="App">
            <h1>Simple To-Do App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={handleChange}
                    placeholder="Add a task"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;