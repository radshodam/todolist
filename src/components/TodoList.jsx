import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, completeHandler }) => {
  const renderTodos = () => {
    if (todos.length === 0) {
      return <p>add todo </p>;
    }

    return (
      <div>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} completeHandler={completeHandler} />;
        })}
      </div>
    );
  };
  return <>{renderTodos()}</>;
};

export default TodoList;

// import React from "react";

// const TodoList = ({ todos }) => {
//   if (todos.length === 0) {
//     return <p>add todo </p>;
//   }
//   return (

//     <div>
//       {todos.map((todo) => {

//         return (
//           <div>
//             <div>{todo.text}</div>
//             <div>
//               <button onClick={""}>edit</button>
//               <button onClick={""}>complete</button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default TodoList;
