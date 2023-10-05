import React from "react";
import Todo from "./Todo";

//関数コンポーネント
const TodoList = ({ todos, toggleTodo }) => {
  //コンポーネントにどんどん変数を渡していく
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};

//どのファイルでも使えるようにする
export default TodoList;
