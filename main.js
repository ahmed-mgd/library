const myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary(title, author, numPages, read) {
    myLibrary.push(new Book(title, author, numPages, read));
}

function outputBookToTable(book) {
    const row = document.createElement("tr");
    const propertyValues = Object.values(book);
    propertyValues.forEach((attribute) => {
        const data = document.createElement("td");
        if (typeof attribute === "boolean") {
            const readCheckBox = document.createElement("input");
            readCheckBox.setAttribute("type", "checkbox");
            if (book.read) {
                readCheckBox.checked = true;
            }
            data.appendChild(readCheckBox);
            readCheckBox.addEventListener("change", () => {
                toggleReadStatus(book);
            });
        } else {
            data.textContent = attribute;
        }
        row.appendChild(data);
    });
    const deleteContainer = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteContainer.appendChild(deleteBtn);
    row.appendChild(deleteContainer);
    deleteBtn.addEventListener("click", () => {
        const index = myLibrary.indexOf(book);
        myLibrary.splice(index, 1);
        row.remove();
    })

    table.appendChild(row);
}

function toggleReadStatus(book) {
    book.read = !book.read;
}

// Manually added books
addBookToLibrary("Harry Potter", "JK Rowling", "295", false);
addBookToLibrary("A Fault in Our Stars", "John Blue", "295", true);

const table = document.querySelector("#main");
myLibrary.forEach((book) => {
    outputBookToTable(book);
});

const newBookBtn = document.querySelector("#new-button");
const cancelBtn = document.querySelector("#cancel-button");
const addBookBtn = document.querySelector("#add-button");
const newBookDialog = document.querySelector("#new-dialog");

const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");

newBookBtn.addEventListener("click", () => {
    newBookDialog.showModal();
});

cancelBtn.addEventListener("click", (e) => {
    newBookDialog.close();
    e.preventDefault();
});

addBookBtn.addEventListener("click", (e) => {
    const selectedReadStatus = document.querySelector("input[name='read_status']:checked");
    const readStatus = selectedReadStatus.value === "yes";
    addBookToLibrary(titleField.value, author.value, pagesField.value, readStatus);
    outputBookToTable(myLibrary[myLibrary.length - 1]);
    e.preventDefault();
});