import React from "react";

const Todo = ({ todo, completeHandler }) => {
  const completed = (id) => {
    console.log("compleated");
    console.log(id);
    completeHandler(id);
  };
  return (
    <div>
      <div>
        <div>{todo.text}</div>
        <div>
          <button>edit</button>
          <button onClick={() => completed(todo.id)}>complete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
