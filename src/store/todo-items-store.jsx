import { createContext, useReducer } from "react";

export const todoItemsContext = createContext({
  todoItems: [],
  handleNewItem: () => {},
  deletebutton: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "New_Item") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "Delete_Item") {
    newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
  }

  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const initialTodoItems = [
    { name: "Go to Gym", dueDate: "06-12-2023" },
    { name: "Go to College", dueDate: "04-11-2024" },
  ];

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    dispatchTodoItems({
      type: "New_Item",
      payload: { itemName, itemDueDate },
    });
  };

  const deletebutton = (todoItemName) => {
    dispatchTodoItems({
      type: "Delete_Item",
      payload: { itemName: todoItemName },
    });
  };

  return (
    <todoItemsContext.Provider value={{ todoItems, handleNewItem, deletebutton }}>
      {children}
    </todoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
