import TodoListApp from "./TodoListApp.js";
import { Todo } from "./TodoListApp.js";

export default class AddButton {
	todoListApp: TodoListApp;
	constructor(){
		this.todoListApp = new TodoListApp()
	}

	private actionAddButton():void {
		const input: HTMLInputElement | null = <HTMLInputElement>document.getElementById("input");
		if(!input) return;
		const inputValue: string = input.value;

		if (inputValue === '') {
			alert("You must write something!");
		} else {
			const todoObj: Todo = {
				name: inputValue,
				status: 0,
			}

			this.todoListApp.addTodo(todoObj);
			input.value = '';
		}
	}

	public subscribeOnClickAddButton():void {
		const addButton: HTMLElement = document.getElementById("addButton");
		addButton.addEventListener('click', ():void => {
			this.actionAddButton();
		})
	}
}