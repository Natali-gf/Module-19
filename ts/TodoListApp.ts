import CloseButton from "./CloseButton.js"
import { Status } from "./enum/status.js"

export type Todo = {
	name: string,
	status: Status.Done | Status.InProgress,
}

export default class TodoListApp {
	private closeButton: CloseButton;
	constructor(){
		this.closeButton = new CloseButton();
	}

	public basicTodoList: Array<Todo> = [
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
	]

	public createBasicListTodo():void {
		for(let i: number = 0; i < this.basicTodoList.length; i++){
			this.addTodo(this.basicTodoList[i])
		}
	}

	public addTodo(todoObj: Todo,):void {
		const todoItem: HTMLLIElement = document.createElement("li");
		const text: Text = document.createTextNode(todoObj.name);
		todoItem.appendChild(text);
		todoItem.className = "list__item";

		this.closeButton.createCloseButton(todoItem)
		const todoList: HTMLElement = document.getElementById("todoList");
		if(todoList){
			todoList.appendChild(todoItem);
		}

		this.checkStatus(todoItem, todoObj)
	}

	private checkStatus(todoItem: HTMLLIElement, todoObj: Todo):void {
		if(todoObj.status === 1){
			todoItem.classList.add("checked");
		}
		todoItem.addEventListener('click', (): void => {
			this.changeTodoStatus(todoObj);
			todoItem.classList.toggle("checked");
		}, false);
	}

	private changeTodoStatus(todoObj: Todo):void {
		if(todoObj.status === Status.Done){
			todoObj.status = Status.InProgress;
		} else {
			todoObj.status = Status.Done;
		}
	}
}