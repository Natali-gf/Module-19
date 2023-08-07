// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("li");
for (let i: number = 0; i < myNodelist.length; i++) {
  const span: HTMLElement = document.createElement("span");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "todo__close-button";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("todo__close-button");
for (let i: number = 0; i < closeButtons.length; i++) {
  let closeButton: Element = closeButtons[i];
	closeButton.addEventListener("click", (): void => {
    const li: HTMLElement = closeButton.parentElement;
    if(li){
      li.style.display = "none"
    }
  })
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement = document.querySelector('ul');
list.addEventListener('click', (e): void => {
  let target: HTMLElement = <HTMLElement>e.target;
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(): void {
  const li: HTMLLIElement = document.createElement("li");
  const input: HTMLInputElement | null = <HTMLInputElement>document.getElementById("input");
  if(!input) return;
  const inputValue: string = input.value;
  const text: Text = document.createTextNode(inputValue);
  li.appendChild(text);
  li.className = "list__item";

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    const ul: HTMLElement = document.getElementById("todoList")
    if(ul){
      ul.appendChild(li);
    }
  }
  input.value = "";

  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "todo__close-button";
  span.appendChild(txt);
  li.appendChild(span);

  span.addEventListener("click", (): void => {
    const li = span.parentElement;
    if(li){
      li.style.display = "none"
    }
  })
}
