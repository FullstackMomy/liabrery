export class ReaderStorage {
    readers = [];
    constructor() {
        this.getReaders();
    }
    updateReaders() {
        localStorage.setItem('readers',JSON.stringify(this.readers));
        this.getReaders();
    }
    getReaders() {
        if (!localStorage.getItem('readers')) {
            this.updateReaders();
        } else {
            this.readers = JSON.parse(localStorage.getItem('readers')); 
        }
    }
}