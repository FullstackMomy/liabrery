export class BookStorage {
  archive = [];
  constructor() {
    this.getArchive();
  }
  updateArchive() {
    localStorage.setItem("books", JSON.stringify(this.archive));
    this.getArchive();
  }
  getArchive() {
    if (!localStorage.getItem("books")) {
      this.updateArchive();
    } else {
      this.archive = JSON.parse(localStorage.getItem("books"));
    }
  }
}

// export class ProductStorage {
//   allProducts = [];
//   constructor() {
//     this.getAllProducts();
//   }
//   updateAllProducts() {
//     localStorage.setItem("products", JSON.stringify(this.allProducts));
//     this.getAllProducts();
//   }
//   getAllProducts() {
//     if (!localStorage.getItem("products")) {
//       this.updateAllProducts();
//     } else {
//       this.allProducts = JSON.parse(localStorage.getItem("products"));
//     }
//   }
// }
