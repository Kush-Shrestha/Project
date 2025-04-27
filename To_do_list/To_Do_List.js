const todoList = [
];

let todoContainer = document.getElementById("todos");
// console.log(todoContainer);
let addBtn = document.getElementById("add_btn");  // Run line no 52. This is the button that will add the todo
let deleteBtn = document.getElementById("delete_btn");
let editBtn = document.getElementById("edit_btn");

const showTodos = () => {
    for (let i = 0; i < todoList.length; i++) {
        let list = document.createElement("li");
        list.className = "todo_item"
        // todos tag
        let para = document.createElement("p");
        let aside = document.createElement("aside");

        // Creating button and adding classes
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit"
        editBtn.className = "btn_edit"
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "btn_delete";
        
        // Fixed delete button event listener
        deleteBtn.addEventListener("click", function deleteTodo() {
            list.remove();
        });
        
        // Separate edit button event listener
        editBtn.addEventListener("click", function editTodo() {
            let newText = prompt("Edit task:", para.innerText);
            if (newText !== null && newText.trim() !== "") {
                para.innerText = newText.trim();
            }
        });

        // Pur buttons inside the aside tag
        aside.appendChild(editBtn);
        aside.appendChild(deleteBtn)

        // Put the todo text inside the p tag
        para.innerText = todoList[i].title;

        // Putting paragraph and aside inside li
        list.appendChild(para);
        list.appendChild(aside);

        // Putting li inside ul that is known as todoContainer in js for this code
        todoContainer.appendChild(list);
    };
};
showTodos();


addBtn.addEventListener("click", function addTodo() {
    let input = document.getElementById("input");
    let typeValue = input.value;
    console.log(typeValue);
    let list = document.createElement("li");
    list.className = "todo_item"
    // todos tag
    let para = document.createElement("p");
    let aside = document.createElement("aside");

    // Creating button and adding classes
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit"
    editBtn.className = "btn_edit"
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete"
    deleteBtn.className = "btn_delete"

    // Pur buttons inside the aside tag
    aside.appendChild(editBtn);
    aside.appendChild(deleteBtn)

    // Put the todo text inside the p tag
    para.innerText = typeValue;
    deleteBtn.addEventListener("click", function deleteTodo() {
        list.remove();
    });
    editBtn.addEventListener("click", function editTodo() {
        let newText = prompt("Edit task:", para.innerText);
        if (newText !== null && newText.trim() !== "") {
            para.innerText = newText.trim();
        }
    });

    // Putting paragraph and aside inside li
    list.appendChild(para);
    list.appendChild(aside);

    // Putting li inside ul that is known as todoContainer in js for this code
    todoContainer.appendChild(list);
    input.value = "";
});