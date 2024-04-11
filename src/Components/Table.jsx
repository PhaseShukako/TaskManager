import React from 'react';

function Table({ tasks, onDeleteTask, onUpdateTask }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Homework</th>
          <th>Subject</th>
          <th>Deadline</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task.id}>
            <td>{task.homework}</td>
            <td>{task.subject}</td>
            <td>{task.deadline}</td>
            <td>
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
              <UpdateTaskForm task={task} onUpdate={onUpdateTask} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
