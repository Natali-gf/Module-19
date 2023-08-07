export default class CloseButton {

	public actionCloseButton(closeButton: HTMLElement):void {
		closeButton.addEventListener("click", (): void => {
			const listItem: HTMLElement = closeButton.parentElement;
			if(listItem){
				listItem.style.display = "none"
			}
		})
	}

	public createCloseButton(todoItem: HTMLLIElement):void {
		const closeButton: HTMLElement = document.createElement("button");
		const iconCloseBtn: Text = document.createTextNode("\u00D7");
		closeButton.className = "todo__close-button";
		closeButton.appendChild(iconCloseBtn);
		todoItem.appendChild(closeButton);

		this.actionCloseButton(closeButton)
	}
}