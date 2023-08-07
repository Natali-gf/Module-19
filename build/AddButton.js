import TodoListApp from "./TodoListApp.js";
export default class AddButton {
    constructor() {
        this.todoListApp = new TodoListApp();
    }
    actionAddButton() {
        const input = document.getElementById("input");
        if (!input)
            return;
        const inputValue = input.value;
        if (inputValue === '') {
            alert("You must write something!");
        }
        else {
            const todoObj = {
                name: inputValue,
                status: 0,
            };
            this.todoListApp.addTodo(todoObj);
            input.value = '';
        }
    }
    subscribeOnClickAddButton() {
        const addButton = document.getElementById("addButton");
        addButton.addEventListener('click', () => {
            this.actionAddButton();
        });
    }
}
