import { useState,useRef } from "react";
import { MdAddBox } from "react-icons/md";
import{useContext} from "react";
import { todoItemsContext } from "../store/todo-items-store";
function AppTodo() {
  const context=useContext(todoItemsContext);
  const newitem=context.handleNewItem;
  let todonameref=useRef();
  let tododateref=useRef();
  const addbuttonclicked=(event)=>{
    event.preventDefault();
    let todoname=todonameref.current.value;
    let tododate=tododateref.current.value;
    newitem(todoname,tododate);

  }
  return (
    <div className="container text-center">
      <form class="row stylerow" onSubmit={addbuttonclicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={todonameref} ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={tododateref} ></input>
        </div>
        <div className="col-2">
          <button  className="btn btn-success stylebutton" >
          <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AppTodo;
