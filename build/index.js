import AddButton from "./AddButton.js";
import TodoListApp from "./TodoListApp.js";
const todoList = new TodoListApp();
todoList.createBasicListTodo();
const addButton = new AddButton();
addButton.subscribeOnClickAddButton();
