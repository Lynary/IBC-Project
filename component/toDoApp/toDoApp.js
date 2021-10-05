import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../layouts/Layout";
import { addTodo, delTodo } from "../../redux/store/actions/todoActions";

const TodoApp = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const user = useSelector((state) => state.UserReducer.user);
  const dispatch = useDispatch();
  const addNewTodo = () => {
    const data = {
      key: todos.length+1,
      title: "This is "+(todos.length+1),
      complete: false,
    };
    dispatch(addTodo(data));
  };


  return (
    <Layout>
      <h1>todo app</h1>
      <button onClick={addNewTodo}>add</button>

      {todos.map((todo) => (
        <div 
        key={todo.key}
        >
          <button onClick={() => dispatch(delTodo(todo.key))}>delete</button>
          <p>{todo.title}</p>
        </div>
      ))}
    </Layout>
  );
};

export default TodoApp;
