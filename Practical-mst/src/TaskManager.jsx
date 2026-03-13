import { useState } from 'react';
import { useForm } from './useForm';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const { values, handleChange, reset } = useForm({ title: '', priority: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title: values.title, priority: values.priority }]);
    reset();
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={values.title}
          onChange={handleChange}
          required
        />
        <select name="priority" value={values.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
