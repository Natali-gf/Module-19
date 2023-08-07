import AddButton from "./AddButton.js";
import TodoListApp from "./TodoListApp.js";

const todoList: TodoListApp = new TodoListApp();
todoList.createBasicListTodo();

const addButton: AddButton = new AddButton();
addButton.subscribeOnClickAddButton();
