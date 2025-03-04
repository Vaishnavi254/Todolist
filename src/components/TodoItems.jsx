import { todoItemsContext } from "../store/todo-items-store";
import ToDoItem from "./TodoItem";
import styles from "./TodoItems.module.css"
import { useContext } from "react";
const ToDoItems=()=>{
  const context=useContext(todoItemsContext);
  const todoItems=context.todoItems;
  
    return <div className={styles.itemsContainer}>
     {todoItems.map(item =><ToDoItem todoName={item.name} todoDate={item.dueDate} ></ToDoItem>)}   
  </div>
}
export default ToDoItems;