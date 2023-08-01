import { Reader } from "./reader.js";
import { ReaderStorage } from "./readerStorage.js";
let readerBtn = document.getElementById('addReader');
readerBtn.addEventListener('click',()=>{
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let newReader = new Reader(firstName, lastName);
    let newStorage = new ReaderStorage();
    newStorage.readers.push(newReader);
    newStorage.updateReaders();
    console.log(newStorage.readers);
});