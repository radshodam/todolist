import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (input) => {
    console.log(input);
    console.log(todos);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeHandler=(id)=>{
      console.log("jhg")
      console.log(id)
  }
  return (
    <>
      {/* todoForm for pass handleclick and get state input */}
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} completeHandler={completeHandler}/>
    </>
  );
};

export default TodoApp;
