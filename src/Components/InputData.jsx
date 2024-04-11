import React, { useState } from 'react';

function InputData({ onAddTask }) {
  const [homework, setHomework] = useState('');
  const [subject, setSubject] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleAddTask = () => {
    if (homework.trim() !== '' && subject.trim() !== '' && deadline.trim() !== '') {
      onAddTask({ homework, subject, deadline });
      setHomework('');
      setSubject('');
      setDeadline('');
    }
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Homework"
        value={homework}
        onChange={(e) => setHomework(e.target.value)}
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
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default InputData;
