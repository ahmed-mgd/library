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

function toggleReadStatus(book) {
    book.read = !book.read;
}

// Manually added books
addBookToLibrary("Harry Potter", "JK Rowling", "295", false);
addBookToLibrary("A Fault in Our Stars", "John Blue", "295", true);

const table = document.querySelector("#main");
myLibrary.forEach((book) => {
    const row = document.createElement("tr");
    const propertyValues = Object.values(book);
    propertyValues.forEach((attribute) => {
        const data = document.createElement("td");
        data.textContent = attribute;
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
});

const newBookBtn = document.querySelector("#new-button");
const cancelBtn = document.querySelector("#cancel-button");
const addBookBtn = document.querySelector("#add-button");
const newBookDialog = document.querySelector("#new-dialog");

newBookBtn.addEventListener("click", () => {
    newBookDialog.showModal();
});

cancelBtn.addEventListener("click", (e) => {
    newBookDialog.close();
    e.preventDefault();
});

addBookBtn.addEventListener("click", (e) => {
    myLibrary.push(new Book(title, author, numPages, read));
    e.preventDefault();
});