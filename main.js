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
    table.appendChild(row);
});

const newBookBtn = document.querySelector("#new-button");
const newBookDialog = document.querySelector("#new-dialog");
newBookBtn.addEventListener("click", () => {
    newBookDialog.showModal();
})