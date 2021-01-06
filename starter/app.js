const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");


todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodos);

function addTodo(e) {
    e.preventDefault();

    if (todoInput.value) {

        // Menambahkan elemen LI didalam javaScript
        const LI = document.createElement("li");

        // Menambahkan sebuah class kedalam elemen LI
        LI.className = "list-group-item d-flex justify-content-between align-items-center mb-1";

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

        // Membersihkan isi inputan
        todoInput.value = "";

    } else {
        alert("Anda belum memasukan kalimat apapun");
    }

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