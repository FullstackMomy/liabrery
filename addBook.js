import { Book } from "./book.js";
import { BookStorage } from "./bookStorage.js";
let bookBtn = document.getElementById('addBook');
bookBtn.addEventListener('click',()=>{
    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let newBook = new Book(author, bookName);
    let newStorage = new BookStorage();
    newStorage.archive.push(newBook);
    newStorage.updateArchive();
    console.log(newStorage.archive);
});