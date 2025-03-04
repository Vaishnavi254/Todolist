import AppName from "./components/Appname";
import AddTodo from "./components/Addtodo";
import ToDoItems from "./components/TodoItems";
import Welcome from "./components/Welcome";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcome />
        <ToDoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
