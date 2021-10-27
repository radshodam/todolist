import React, { useState } from "react";

const TodoForm = ({ addTodoHandler }) => {
  const [input, setInput] = useState("");
  const changeInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    addTodoHandler(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={input} onChange={changeInput} placeholder="" />
      <button type="submit">submit</button>
    </form>
  );
};

export default TodoForm;
