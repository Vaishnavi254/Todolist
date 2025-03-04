import { MdOutlineDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";
function ToDoItem({todoName,todoDate}) {
  
  const {deletebutton}=useContext(todoItemsContext);
  return (
    
  <div className="container">
    <div className="row stylerow">
      <div className="col-6 name">{todoName}</div>
      <div className="col-4 date">{todoDate}</div>
      <div className="col-2">
        <button type="button" class="btn btn-danger stylebutton" onClick={()=>deletebutton(todoName)}>
        <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  </div>
  );
}
export default ToDoItem;
