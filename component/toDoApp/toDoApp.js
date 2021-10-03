import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../layouts/Layout";
import { addTodo, delTodo } from "../../redux/store/actions/todoActions";

const TodoApp = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const user = useSelector((state) => state.UserReducer.user);
  const dispatch = useDispatch();
  const addNewTodo = () => {
    const data = {
      id: todos.length+1,
      title: "This is "+(todos.length+1),
      complete: false,
    };
    dispatch(addTodo(data));
  };

  useEffect(() => {
    var data = user.filter(el=>el.username=="mamat")
    console.log(data)
  }, [user])

  return (
    <Layout>
      <h1>todo app</h1>
      <button onClick={addNewTodo}>add</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <button onClick={() => dispatch(delTodo(todo.id))}>delete</button>
          <p>{todo.title}</p>
        </div>
      ))}
    </Layout>
  );
};

export default TodoApp;
