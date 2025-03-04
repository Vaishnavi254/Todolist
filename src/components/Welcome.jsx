import styles from "./Welcome.module.css"
import{useContext} from "react";
import { todoItemsContext } from "../store/todo-items-store";
function Welcome(){
    const context=useContext(todoItemsContext);
    const todoItems=context.todoItems;
    return todoItems.length==0&&<div className={styles.welcome}>No tasks, Enjoy your day:)</div>;
}
export default Welcome;