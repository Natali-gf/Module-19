export default class CloseButton {
    actionCloseButton(closeButton) {
        closeButton.addEventListener("click", () => {
            const listItem = closeButton.parentElement;
            if (listItem) {
                listItem.style.display = "none";
            }
        });
    }
    createCloseButton(todoItem) {
        const closeButton = document.createElement("button");
        const iconCloseBtn = document.createTextNode("\u00D7");
        closeButton.className = "todo__close-button";
        closeButton.appendChild(iconCloseBtn);
        todoItem.appendChild(closeButton);
        this.actionCloseButton(closeButton);
    }
}
