import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import TodoApp from "../../component/toDoApp/TodoApp";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoApp />
      </div>
    </Provider>
  );
};

export default App;