const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

immediateLoadEventListener();

function immediateLoadEventListener() {
    // Function untuk mengambil data dari localStorage
    document.addEventListener("DOMContentLoaded", getTodos);

    // Ini adalah event untuk menambah Todo
    todoForm.addEventListener("submit", addTodo);

    // Ini adalah event untuk menghapus 1 Todo
    todoList.addEventListener("click", deleteTodo);

    // Ini adalah event untuk menghapus semua Todo
    clearButton.addEventListener("click", clearTodos);

    // Ini adalah event untu mengfilter Todo
    filterInput.addEventListener("keyup", filterTodos);
}

function getTodos() {

    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach((todo) => {
        // Menambahkan elemen LI didalam javaScript
        const LI = document.createElement("li");

        // Menambahkan sebuah class kedalam elemen LI
        LI.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";

        // Menambahkan children dari LI/ menambahkan isi dari LI
        LI.appendChild(document.createTextNode(todo));

        // Membuat tombol button
        const A = document.createElement("a");

        // Menambahkan Properti href di tag a
        A.href = "#";

        // Menambahkan cildren di tag A
        A.innerHTML = "Delete";

        // Menambahkan class di tag a
        A.className = "badge badge-danger delete-todo";

        // Menambahkan tag a kedalam Li
        LI.appendChild(A);

        // Menambahkan elemen Li yang dibuat didalam javasScript kedalam elemen UL yang ada di HTML
        todoList.appendChild(LI)
    });

}

function addTodo(e) {
    e.preventDefault();

    if (todoInput.value) {

        // Menambahkan elemen LI didalam javaScript
        const LI = document.createElement("li");

        // Menambahkan sebuah class kedalam elemen LI
        LI.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";

        // Menambahkan children dari LI/ menambahkan isi dari LI
        LI.appendChild(document.createTextNode(todoInput.value));

        // Membuat tombol button
        const A = document.createElement("a");

        // Menambahkan Properti href di tag a
        A.href = "#";

        // Menambahkan cildren di tag A
        A.innerHTML = "Delete";

        // Menambahkan class di tag a
        A.className = "badge badge-danger delete-todo";

        // Menambahkan tag a kedalam Li
        LI.appendChild(A);

        // Menambahkan elemen Li yang dibuat didalam javasScript kedalam elemen UL yang ada di HTML
        todoList.appendChild(LI)

        // Menyimpan ke localStorage
        addTodoLocalStorage(todoInput.value);

        // Membersihkan isi inputan
        todoInput.value = "";

    } else {
        alert("Anda belum memasukan kalimat apapun");
    }

}

function addTodoLocalStorage(todoInputValue) {

    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todoInputValue);

    localStorage.setItem("todos", JSON.stringify(todos));

}

function deleteTodo(e) {
    e.preventDefault();

    if (e.target.classList.contains("delete-todo")) {
        if (confirm("Apakah anda yakin ingin menghapus list ini?")) {
            const parent = e.target.parentElement;
            parent.remove();
        }
    }

}

function clearTodos() {
    todoList.innerHTML = "";
}

function filterTodos(e) {
    const filterText = e.target.value.toLowerCase();
    let todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((item) => {
        const itemText = item.firstChild.textContent.toLowerCase();

        if (itemText.indexOf(filterText) != -1) {
            item.setAttribute("style", "display: block;");
        } else {
            item.setAttribute("style", "display: none !important");
        }

    });
}