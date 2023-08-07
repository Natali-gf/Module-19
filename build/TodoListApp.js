import CloseButton from "./CloseButton.js";
import { Status } from "./enum/status.js";
export default class TodoListApp {
    constructor() {
        this.basicTodoList = [
            {
                name: 'Hit the gym',
                status: 0
            },
            {
                name: 'Pay bills',
                status: 1
            },
            {
                name: 'Meet George',
                status: 0
            },
            {
                name: 'Buy eggs',
                status: 0
            },
            {
                name: 'Read a book',
                status: 0
            },
            {
                name: 'Organize office',
                status: 0
            },
        ];
        this.closeButton = new CloseButton();
    }
    createBasicListTodo() {
        for (let i = 0; i < this.basicTodoList.length; i++) {
            this.addTodo(this.basicTodoList[i]);
        }
    }
    addTodo(todoObj) {
        const todoItem = document.createElement("li");
        const text = document.createTextNode(todoObj.name);
        todoItem.appendChild(text);
        todoItem.className = "list__item";
        this.closeButton.createCloseButton(todoItem);
        const todoList = document.getElementById("todoList");
        if (todoList) {
            todoList.appendChild(todoItem);
        }
        this.checkStatus(todoItem, todoObj);
    }
    checkStatus(todoItem, todoObj) {
        if (todoObj.status === 1) {
            todoItem.classList.add("checked");
        }
        todoItem.addEventListener('click', () => {
            this.changeTodoStatus(todoObj);
            todoItem.classList.toggle("checked");
        }, false);
    }
    changeTodoStatus(todoObj) {
        if (todoObj.status === Status.Done) {
            todoObj.status = Status.InProgress;
        }
        else {
            todoObj.status = Status.Done;
        }
    }
}
