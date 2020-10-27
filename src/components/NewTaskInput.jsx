import React, { useState } from 'react';

const NewTaskInput = ({ onSubmit }) => {


  const [newItem, setNewItem] = useState('');

  function setNewTask({ target }) {
    setNewItem(target.value);
  }


  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className="Todo-input"
          name="nameTeam"
          placeholder="New team"
          onChange={setNewTask}
        />
        <button type="submit">
          +
        </button>
      </form>
    </div>
  )
};

export default NewTaskInput;