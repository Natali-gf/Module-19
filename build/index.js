// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "todo__close-button";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
const closeButtons = document.getElementsByClassName("todo__close-button");
for (let i = 0; i < closeButtons.length; i++) {
    let closeButton = closeButtons[i];
    closeButton.addEventListener("click", () => {
        const li = closeButton.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
}
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target.tagName);
    if (target.tagName === 'LI') {
        target.classList.toggle('checked');
    }
}, false);
// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    const input = document.getElementById("input");
    if (!input)
        return;
    const inputValue = input.value;
    const text = document.createTextNode(inputValue);
    li.appendChild(text);
    li.className = "list__item";
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        const ul = document.getElementById("todoList");
        if (ul) {
            ul.appendChild(li);
        }
    }
    input.value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "todo__close-button";
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener("click", () => {
        const li = span.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
}
console.log('finish');
