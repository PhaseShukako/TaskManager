import React, { useState } from 'react';

function InputData({ onAddTask }) {
  const [taskDescription, setTaskDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent form submission
    if (taskDescription.trim() !== '' && subject.trim() !== '' && deadline.trim() !== '') {
      onAddTask({ description: taskDescription, subject, deadline });
      setTaskDescription('');
      setSubject('');
      setDeadline('');
      // Optionally, provide visual feedback to the user that the task has been added
    } else {
      // Optionally, display an error message indicating required fields
    }
  };

  return (
    <form className="input-section" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default InputData;
