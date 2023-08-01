import { ProductStorage } from "./bookStorage.js";
function displayProductsToDelete() {
  let displayProducts = document.getElementById("displayProducts");
  displayProducts.innerHTML = "";

  let MyProductStorage = new ProductStorage();
  MyProductStorage.allProducts.forEach((product) => {
    let newDiv = document.createElement("div");
    let newText = document.createTextNode(
      "the price of " + product.title + "is: " + product.price + "."
    );
    newDiv.setAttribute("class", "productDisplay");
    newDiv.appendChild(newText);
    newDiv.addEventListener("click", (e) => deleteProduct(product.title));
    displayProducts.appendChild(newDiv);
  });
}
function deleteProduct(ProductTitle) {
  let MyProductStorage = new ProductStorage();
  MyProductStorage.allProducts.forEach((product, index) => {
    if (product.title == productTitle) {
      MyProductStorage.allProducts.splice(index, 1);
      MyProductStorage.updateAllProducts();
      displayProductsToDelete();
    }
  });
}
displayProductsToDelete();
