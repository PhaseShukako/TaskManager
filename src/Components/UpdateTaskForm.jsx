import React, { useState } from 'react';

function Table({ tasks, onDeleteTask, onUpdateTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');
  const [editedSubject, setEditedSubject] = useState('');
  const [editedDeadline, setEditedDeadline] = useState('');

  const handleEdit = (taskId, description, subject, deadline) => {
    setEditingTaskId(taskId);
    setEditedDescription(description);
    setEditedSubject(subject);
    setEditedDeadline(deadline);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditedDescription('');
    setEditedSubject('');
    setEditedDeadline('');
  };

  const handleUpdateTask = () => {
    onUpdateTask(editingTaskId, {
      description: editedDescription,
      subject: editedSubject,
      deadline: editedDeadline
    });
    handleCancelEdit();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Task Description</th>
          <th>Subject</th>
          <th>Deadline</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{editingTaskId === task.id ? (
              <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
            ) : (
              task.description
            )}</td>
            <td>{editingTaskId === task.id ? (
              <input
                type="text"
                value={editedSubject}
                onChange={(e) => setEditedSubject(e.target.value)}
              />
            ) : (
              task.subject
            )}</td>
            <td>{editingTaskId === task.id ? (
              <input
                type="date"
                value={editedDeadline}
                onChange={(e) => setEditedDeadline(e.target.value)}
              />
            ) : (
              task.deadline
            )}</td>
            <td>
              {editingTaskId === task.id ? (
                <>
                  <button onClick={handleUpdateTask}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                  <button onClick={() => handleEdit(task.id, task.description, task.subject, task.deadline)}>Edit</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
